const userLocationCordinates = async () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Latitude fun:', latitude);
          console.log('Longitude: fun', longitude);
          resolve([latitude, longitude, true]);
        },
        (error) => {
          console.error('Error getting current position:', error, 'THISIS');
          reject(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      resolve([0, 1, false]);
    }
  });
};

export default userLocationCordinates;
