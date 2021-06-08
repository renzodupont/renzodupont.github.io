mapboxgl.accessToken = 'pk.eyJ1IjoicmVuem9kdXBvbnQiLCJhIjoiY2twazR6ODZ3MWY0djJubzlvaThuaGxmNiJ9.s3XwXRIYv-OPeHhQYrQvqQ';

let map = null;
let mapStyle = 'mapbox://styles/mapbox/navigation-day-v1'; // Default style
let center = [-71.0929717, 42.3598931]; // MIT coordinates

const geoJsonList = { }; // Object to map a bus id with the corresponding data


/*************************** FUNCTIONS ***************************/
// Adds a marker to the map and returns it to be used outside the function
const addMarker = (id, lngLat, iconUrl) => {

  var el = document.createElement('div');
  el.className = id;
  el.style.backgroundImage = iconUrl;
  el.style.width = '57px';
  el.style.height = '65px';
  el.style.backgroundSize = '100%';

  return new mapboxgl.Marker(el)
                     .setLngLat(lngLat)
                     .addTo(map);

}

// Creates the main map and makes it available globally
const createMap = (container, buses) => {

  map = new mapboxgl.Map({
    container: container,
    style: mapStyle,
    center: center,
    zoom: 13,
  });

  buses.forEach(bus => {
    bus.marker = addMarker(bus.id, bus.coordinates[0], 'url(bus.png)');
  });

  map.on('load', () => {
    buses.forEach(bus => {
      createPath(bus.id, bus.coordinates[0]);
    });
  });

};

// Creates a path to be able to show a line using the provided coordinates
const createPath = (pathName, initialCoordinates) => {
  const geoJsonData = { 
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': [ initialCoordinates ] // Initial marker placement
        }
      }
    ]
  };
  geoJsonList[pathName] = geoJsonData;

  map.addSource(pathName, 
    {
      'type': 'geojson',
      'data': geoJsonData
    }
  );
  map.addLayer({
    'id': pathName,
    'type': 'line',
    'source': pathName,
    'layout': { 
      'visibility' : 'visible', 
      'line-cap': 'round',
      'line-join': 'round' 
    },
    'paint': {
      'line-color': getRandomColor(),
      'line-width': 8,
      'line-opacity': 0.8
    }
  });
}

// This function hides all markers and paths except the one sent as argument
const showThisPathOnly = (bus, buses) => {
  setVisibilityToAllPaths('none', buses);
  document.getElementsByClassName(bus.id)[0].style.visibility = 'visible';
  map.setLayoutProperty( bus.id, 'visibility', 'visible' );
  map.flyTo({
    center: bus.coordinates[bus.coordinates.length - 1] // Centers the map in this particular bus
  })
}

// This method sets the same visibility to all markers and paths in the map
const setVisibilityToAllPaths = (visibility, buses) => {
  buses.forEach(item => {
    document.getElementsByClassName(item.id)[0].style.visibility = visibility === 'none' ? 'hidden' : 'visible';
    map.setLayoutProperty( item.id, 'visibility', visibility );
  });
}

// Moves marker and shows the path from the first point to the current place of the marker
const moveMarkerTo = (bus) => {
  const lngLat = bus.coordinates[bus.coordinates.length - 1];
  bus.marker.setLngLat(lngLat);
  if(bus.id in geoJsonList) { // Path lines are created async on map load, so check it exists before adding a new path
    geoJsonList[bus.id].features[0].geometry.coordinates.push(lngLat);
    map.getSource(bus.id).setData(geoJsonList[bus.id]);
  }
};

// Function by Paolo Forgia in https://stackoverflow.com/questions/1484506/random-color-generator
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}