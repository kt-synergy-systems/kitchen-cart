import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

const locationInput = document.getElementById('schedule_location');
const longitudeInput = document.getElementById('schedule_longitude');
const latitudeInput = document.getElementById('schedule_latitude');
console.log(locationInput, longitudeInput, latitudeInput);
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [139.7528, 35.6852], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
let marker;
map.on('click', async (e) => {
  if (marker) {
    marker.remove();
  }
  let lng;
  let lat;
  lng = e.lngLat.lng;
  lat = e.lngLat.lat;
  longitudeInput.value = lng;
  latitudeInput.value = lat;
  console.log(longitudeInput, latitudeInput);
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`
  );
  const data = await res.json();
  locationInput.value = data.features[0].place_name;
  const el = document.createElement('div');
  el.className = 'marker';
  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  console.log(data);
});
