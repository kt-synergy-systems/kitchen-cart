import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const locationInput = document.getElementById('schedule_location');
const longitudeInput = document.getElementById('schedule_longitude');
const latitudeInput = document.getElementById('schedule_latitude');
const simpleForm = document.querySelector('.simple_form');
const simpleFormBtn = document.getElementById('simple-form-btn');
let marker;
let lang;

if (navigator.language === 'ja' || navigator.language.includes('en')) {
  lang = navigator.language.includes('en') ? 'en' : navigator.language;
} else if (navigator.languages && navigator.languages[0]) {
  if (
    navigator.languages[0].includes('en') ||
    navigator.languages[0] === 'ja'
  ) {
    lang = navigator.languages[0].includes('en') ? 'en' : 'ja';
  } else {
    lang = 'en';
  }
} else {
  lang = 'en';
}
console.log(lang);

const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [139.7528, 35.6852], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const createMarker = (lng, lat) => {
  const el = document.createElement('div');
  el.className = 'marker';
  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
};

const removeMarker = () => marker && marker.remove();

const setCoords = (lng, lat) => {
  longitudeInput.value = lng;
  latitudeInput.value = lat;
};

map.on('click', async (e) => {
  removeMarker();
  let lng;
  let lat;
  lng = e.lngLat.lng;
  lat = e.lngLat.lat;
  setCoords(lng, lat);
  console.log(longitudeInput, latitudeInput);
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?&language=${lang}&worldview=jp&access_token=${mapboxgl.accessToken}`
  );
  const data = await res.json();
  locationInput.value = data.features[0].place_name;
  createMarker(lng, lat);
  map.flyTo({ center: [lng, lat], zoom: 14 });
  simpleFormBtn.disabled = false;
  console.log(data);
});

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchInput.value}.json?&country=jp&proximity=139.76,35.68&access_token=${mapboxgl.accessToken}`
  );
  const data = await res.json();
  removeMarker();
  if (data.features && data.features[0]) {
    const lng = data.features[0].center[0];
    const lat = data.features[0].center[1];
    map.flyTo({ center: [lng, lat], zoom: 14 });
    locationInput.value = searchInput.value;
    createMarker(lng, lat);
    setCoords(lng, lat);
    simpleFormBtn.disabled = false;
  }
  console.log(longitudeInput, latitudeInput);
});
console.log(simpleForm);
simpleForm.addEventListener('submit', (e) => {
  if (
    !latitudeInput.value ||
    !longitudeInput.value ||
    latitudeInput.value === '' ||
    longitudeInput.value === ''
  ) {
    e.preventDefault();
    alert('Please pinpoint your location on the map.');
    //location.reload();
  }
});
