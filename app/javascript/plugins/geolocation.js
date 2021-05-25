// first, check if geolocation is supported in the browser

const geoLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported in this browser.");
  } else {
    // 🚀 get user's realtime position
    navigator.geolocation.watchPosition(
      // ✅   success callback, mandatory
      (position) => {
        // do cool stuff with the location
        console.log(position.coords);

        // inside the coords property you can find the
        // latitude and logitude property 🌎
        console.log("Latitude", position.coords.latitude);
        console.log("Longitude", position.coords.longitude);
      },
      // 🚨 error callback, optional
      (error) => {
        // display error
        console.log(error);
      },
      // ⚙️ options object, optional
      {
        timeout: 1000,
      }
    );
  }
}

export default geoLocation;