import { useTranslation } from "react-i18next";
export const getDirections = (currentSchedule) => {
  if (currentSchedule) {
    // if there is more than one location for the day it needs to account for time.
    // add additional validation. check if open or will open today.
    if (!navigator.geolocation) {
      alert(
        'Please enable Gelocation in your browser to use this application.'
      );
    } else {
      navigator.geolocation.getCurrentPosition((position, error) => {
        if (error) {
          alert(error);
        } else {
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude}, ${position.coords.longitude}&destination=${currentSchedule.latitude}, ${currentSchedule.longitude}&travelmode=walking`,
            '_blank'
          );
        }
      });
    }
  } else {
    alert(
      'This food cart is not currently open. Please check back again later.'
    );
  }
};
