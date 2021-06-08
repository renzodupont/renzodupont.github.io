mapboxgl.accessToken = 'pk.eyJ1IjoicmVuem9kdXBvbnQiLCJhIjoiY2twazR6ODZ3MWY0djJubzlvaThuaGxmNiJ9.s3XwXRIYv-OPeHhQYrQvqQ';

let map = null;
let mapStyle = 'mapbox://styles/mapbox/navigation-day-v1'; // Default style
let center = [-58.357578,-33.164445]; // Default center

const pathName = 'line';
const geoJsonData = { 
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [ center ] // Initial marker placement
      }
    }
  ]
};


/*************************** FUNCTIONS ***************************/
// Adds a marker to the map and returns it to be used outside the function
const addMarker = (lngLat, iconUrl) => {

  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = iconUrl;
  el.style.width = '70px';
  el.style.height = '94px';
  el.style.backgroundSize = '100%';

  return new mapboxgl.Marker(el)
                     .setLngLat(lngLat)
                     .addTo(map);

}

// Creates the main map and makes it available globally
const createMap = (container) => {

  map = new mapboxgl.Map({
    container: container,
    style: mapStyle,
    center: center,
    zoom: 16,
  });

  map.on('load', () => {
    createPath(pathName);
  });

};

// Creates a path to be able to show a line using the provided coordinates
const createPath = () => {
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
      'line-color': '#ed6498',
      'line-width': 8,
      'line-opacity': 0.8
    }
  });
}

// Clear any visible marker from the map
const clearPath = () => {
  geoJsonData.features[0].geometry.coordinates = [ center ];
  map.getSource(pathName).setData(geoJsonData);
};

// Moves marker and shows the path from the first point to the current place of the marker
const moveMarkerTo = (marker, lngLat) => {
  marker.setLngLat(lngLat);
  geoJsonData.features[0].geometry.coordinates.push(lngLat);
  map.getSource(pathName).setData(geoJsonData);
};