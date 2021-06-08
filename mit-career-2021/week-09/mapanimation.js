let myHouse = [-58.357578,-33.164445];

/*************************** FUNCTIONS ***************************/
let counter = 0;
let mainMarker = null;
let currentPath = null;
let currentPathId = null;

const move = (timestamp) => {

  if(map === null || mainMarker === null || 
    currentPath === null || counter >= currentPath.length) return;

  setTimeout(() => {

    mainMarker.setLngLat(currentPath[counter]);
    showPath(currentPathId, currentPath[counter]);
    counter++;

    move();

  }, 200);

}

/*************************** CALLBACK / EVENT FUNCTIONS ***************************/
const showExercisePath = () => {
  showSelectedPath('exercise', exercisePath);
};
const showToTheParkPath = () => {
  showSelectedPath('toThePark', toTheParkPath);
};
const showToTheBeachPath = () => {
  showSelectedPath('toTheBeach', toTheBeach);
};

const showSelectedPath = (pathId, path) => {
  counter = 0;
  currentPath = path;
  currentPathId = pathId;
  clearAllPaths();
  move();
};

/*************************** MAIN CODE ***************************/
window.onload = () => {

  let currentHour = +(new Date()).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  hour12: false
                                });
  let isNight = currentHour > 19 || currentHour < 6;
  center = myHouse;
  mapStyle = isNight ? 'mapbox://styles/mapbox/navigation-night-v1' : 
                       'mapbox://styles/mapbox/navigation-day-v1';

  document.getElementById('main-title').innerHTML = isNight ? 'You are viewing this during the night. The theme is adjusted to help your vision :)' :
                                                              'You are viewing this during the day. Come back after 19 if you want to check the dark theme.';
  document.getElementById('top-container').classList.add( isNight ? 'alert-dark' : 'alert-light' );

  createMap('map');
  mainMarker = addMarker(myHouse, 'url(me.png)');

}