const requestUrl = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';

/*************************** FUNCTIONS ***************************/
const getBusLocations = async () => {

  const response = await fetch(requestUrl);
  const jsonResponse = await response.json();
  return jsonResponse.data; // Data is an array with several buses and related data

};


// :::::::::::::::: Sample payload of each item in the jsonResponse.data array ::::::::::::::::
/*
{
  "attributes": {
    "bearing": 294,
    "current_status": "IN_TRANSIT_TO",
    "current_stop_sequence": 21,
    "direction_id": 1,
    "label": "1901",
    "latitude": 42.33159999,
    "longitude": -71.07813124,
    "occupancy_status": "MANY_SEATS_AVAILABLE",
    "speed": null,
    "updated_at": "2021-06-08T12:48:41-04:00"
  },
  "id": "y1901",
  "links": {
    "self": "/vehicles/y1901"
  },
  "relationships": {
    "route": {
      "data": {
        "id": "1",
        "type": "route"
      }
    },
    "stop": {
      "data": {
        "id": "10101",
        "type": "stop"
      }
    },
    "trip": {
      "data": {
        "id": "47445041",
        "type": "trip"
      }
    }
  },
  "type": "vehicle"
}
*/