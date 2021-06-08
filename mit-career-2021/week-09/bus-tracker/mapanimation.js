const ALL_BUSES_OPTION = '-- All --';
const buses = [ ]; // This is used to keep information of each bus: { id, coordinates }

let countdown = 15; // Used to count next refresh time

/*************************** FUNCTIONS ***************************/
const updateLocations = async () => {

  const locations = await getBusLocations(); // Each bus contains an id used to identify each item

  if(map === null) { // The first run, we create the map with the number of buses we will be showing
    const busSelector = document.getElementById('bus-selector');
    busSelector.add(createBusSelectorOption(ALL_BUSES_OPTION));

    locations.forEach(bus => {
      busSelector.add(createBusSelectorOption(bus.id));
      buses.push({ 
        id : bus.id.toString(), 
        coordinates : [ [ bus.attributes.longitude, bus.attributes.latitude] ] 
      });
    });
    createMap('map', buses);
  } 

  locations.forEach(bus => {
    const existingBus = buses.find(item => item.id === bus.id.toString())
    if(existingBus !== undefined) {
      existingBus.coordinates.push( [ bus.attributes.longitude, bus.attributes.latitude ] );
      moveMarkerTo(existingBus);
    }
  });

  countdown = 15;
  setTimeout(updateLocations, 15000);

}

const createBusSelectorOption = (text) => {
  const option = document.createElement("option");
  option.text = text;
  option.value = text;
  return option;
}

/*************************** CALLBACK FUNCTIONS ***************************/
const onBusSelectorChange = () => {
  const busSelector = document.getElementById('bus-selector');
  if(busSelector.value === ALL_BUSES_OPTION)
    setVisibilityToAllPaths('visible', buses);
  else
    showThisPathOnly(buses.find(item => item.id === busSelector.value), buses);
};

/*************************** MAIN CODE ***************************/
window.onload = () => {

  let currentHour = +(new Date()).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  hour12: false
                                });
  let isNight = currentHour > 19 || currentHour < 6;
  mapStyle = isNight ? 'mapbox://styles/mapbox/navigation-night-v1' : 
                       'mapbox://styles/mapbox/navigation-day-v1';

  document.getElementById('main-title').innerHTML = isNight ? 'You are viewing this during the night. The theme is adjusted to help your vision :)' :
                                                              'You are viewing this during the day. Come back after 19 if you want to check the dark theme.';
  document.getElementById('top-container').classList.add( isNight ? 'alert-dark' : 'alert-light' );

  updateLocations();
  // Counter shows constantly while the page is opened
  setInterval(() => {
    if(countdown > 0) {
      countdown -= 1;
      document.getElementById('countdown').innerHTML = 'Time to next refresh: ' + countdown + ' seconds.';
    }
  }, 1000);

  document.getElementById('bus-selector').onchange = onBusSelectorChange;

}