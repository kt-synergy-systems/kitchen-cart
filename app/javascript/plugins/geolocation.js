// first, check if geolocation is supported in the browser

const geoLocation = () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported in this browser.');
  } else {
    console.log('fhis');
    navigator.geolocation.getCurrentPosition((position, error) => {
      if (error) {
        console.log(error);
      }
      console.log(position);
      return position.coords;
    });
  }
};

export default geoLocation;
