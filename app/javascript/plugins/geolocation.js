// first, check if geolocation is supported in the browser

const geoLocation = () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported in this browser.');
  } else {
    navigator.geolocation.getCurrentPosition((position, error) => {
      if (error) {
      }
      return position.coords;
    });
  }
};

export default geoLocation;
