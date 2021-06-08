mapboxgl.accessToken = 'pk.eyJ1IjoicmVuem9kdXBvbnQiLCJhIjoiY2twazR6ODZ3MWY0djJubzlvaThuaGxmNiJ9.s3XwXRIYv-OPeHhQYrQvqQ';

let map = null;
let mapStyle = 'mapbox://styles/mapbox/navigation-day-v1'; // Default style
let center = [-58.357578,-33.164445]; // Default center

const allPaths = ['exercise', 'toThePark', 'toTheBeach'];
const geoJsonData = { };

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

const createMap = (container) => {

  map = new mapboxgl.Map({
    container: container,
    style: mapStyle,
    center: center,
    zoom: 16,
  });

  map.on('load', () => {
    allPaths.forEach(item => createPath(item));
  });

};

const createPath = (pathId) => {

  geoJsonData[pathId] = { 
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [ center ]
          }
        }
      ]
    };

  map.addSource(pathId, 
    {
      'type': 'geojson',
      'data': geoJsonData[pathId]
    });
  
  map.addLayer({
    'id': pathId,
    'type': 'line',
    'source': pathId,
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

const clearAllPaths = () => {

  allPaths.forEach(pathId => {
    geoJsonData[pathId].features[0].geometry.coordinates = [ center ];
    map.getSource(pathId).setData(geoJsonData[pathId]);
  });

};

const showPath = (pathId, lngLat) => {

  geoJsonData[pathId].features[0].geometry.coordinates.push(lngLat);
  map.getSource(pathId).setData(geoJsonData[pathId]);

};