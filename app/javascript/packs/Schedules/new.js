import mapboxgl from '!mapbox-gl';
import i18next from 'i18next';
import { translationData } from '../entry';
i18next.init(translationData);
const t = i18next.t.bind(i18next);
window.i18n = i18next;
window.t = t;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
const dataDiv = document.getElementById('data-div');
const data = dataDiv ? JSON.parse(dataDiv.dataset.data) : null;
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const locationInput = document.getElementById('schedule_location');
const longitudeInput = document.getElementById('schedule_longitude');
const latitudeInput = document.getElementById('schedule_latitude');
const simpleForm = document.querySelector('.simple_form');
const simpleFormBtn = document.getElementById('simple-form-btn');
const butt = document.getElementById('simple-form-btn');
const endTimeInput = document.getElementById('schedule_end_time');
const startTimeInput = document.getElementById('schedule_start_time');
const dateInput = document.getElementById('schedule_date');
const mapInstructions = document.querySelector('.map-instructions');
const searchBtn = document.getElementById('search-btn');
const locationText = document.querySelector('.location-text');
const startTimeText = document.querySelector('.start-time-text');
const endTimeText = document.querySelector('.end-time-text');
const scheduleLocation = document.getElementById('schedule_location');
const scheduleTitle = document.getElementById('schedule-title');

mapInstructions.innerText = t('forms.schedule_form.instruction');
searchInput.placeholder = t('forms.schedule_form.search_text');
searchBtn.innerText = t('buttons.search');
locationText.innerText = t('forms.schedule_form.location');
startTimeText.innerText = t('forms.schedule_form.open');
endTimeText.innerText = t('forms.schedule_form.close');
scheduleLocation.placeholder = t('forms.schedule_form.nearest_station');
scheduleTitle.innerText = t('forms.schedule_form.title');
butt.value = t('buttons.create_schedule');
let marker;
let lang;

const getFormattedTime = (date) => {
  return date.toISOString().match(/\d{4}-\d\d-\d\dT\d\d:/)[0] + '00';
};
const initialTime = new Date(Date.now() + 1000 * 60 * 60 * 10);
startTimeInput.value = data ? getFormattedTime(new Date(data.schedule.start_time)) : getFormattedTime(initialTime);
startTimeInput.min = getFormattedTime(initialTime);
endTimeInput.min = getFormattedTime(initialTime);
endTimeInput.value = data
  ? getFormattedTime(new Date(data.schedule.end_time))
  : getFormattedTime(new Date(Date.now() + 1000 * 60 * 60 * 11));

dateInput.value = new Date(startTimeInput.value).toDateString();

startTimeInput.addEventListener('change', (e) => {
  simpleFormBtn.disabled = false;
  endTimeInput.min = startTimeInput.value;
  endTimeInput.value = startTimeInput.value;
  dateInput.value = new Date(startTimeInput.value).toDateString();
});
endTimeInput.addEventListener('change', () => (simpleFormBtn.disabled = false));

if (navigator.language === 'ja' || navigator.language.includes('en')) {
  lang = navigator.language.includes('en') ? 'en' : navigator.language;
} else if (navigator.languages && navigator.languages[0]) {
  if (navigator.languages[0].includes('en') || navigator.languages[0] === 'ja') {
    lang = navigator.languages[0].includes('en') ? 'en' : 'ja';
  } else {
    lang = 'en';
  }
} else {
  lang = 'en';
}

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

if (data) {
  map.flyTo({
    center: [data.schedule.longitude, data.schedule.latitude],
    zoom: 14,
  });
  locationInput.value = data.schedule.location;
  createMarker(data.schedule.longitude, data.schedule.latitude);
}

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
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?&language=${lang}&worldview=jp&access_token=${mapboxgl.accessToken}`
  );
  const data = await res.json();
  locationInput.value = data.features[0].place_name;
  createMarker(lng, lat);
  map.flyTo({ center: [lng, lat], zoom: 14 });
  simpleFormBtn.disabled = false;
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
});

simpleForm.addEventListener('submit', (e) => {
  if (!latitudeInput.value || !longitudeInput.value || latitudeInput.value === '' || longitudeInput.value === '') {
    e.preventDefault();
    alert(t('alerts.geolocation'));
    simpleFormBtn.disabled = false;
  } else if (dateInput.value === '' || !dateInput.value) {
    e.preventDefault();
    alert(t('alerts.start_time'));
    simpleFormBtn.disabled = false;
  } else if (endTimeInput.value === '' || !endTimeInput.value) {
    e.preventDefault();
    alert(t('alerts.end_time'));
    simpleFormBtn.disabled = false;
  } else if (new Date(endTimeInput.value) - new Date(startTimeInput.value) <= 0) {
    e.preventDefault();
    alert(t('alerts.early_end'));
    simpleFormBtn.disabled = false;
  } else if (locationInput.value === '') {
    e.preventDefault();
    alert(t('alerts.location'));
    simpleFormBtn.disabled = false;
  }
});
