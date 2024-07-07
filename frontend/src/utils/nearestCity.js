import { cityCoordinates } from '../assets/static/constants';

function calculateDistance(lat1, lon1, lat2, lon2) {
  var dx = lat2 - lat1;
  var dy = lon2 - lon1;
  return Math.sqrt(dx * dx + dy * dy);
}

const findNearestCity = (providedLatitude, providedLongitude) => {
  let minDistance = Infinity;
  let nearestCity = null;

  for (const [city, coords] of Object.entries(cityCoordinates)) {
    const distance = calculateDistance(
      providedLatitude,
      providedLongitude,
      coords.latitude,
      coords.longitude
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = city;
    }
  }

  return nearestCity;
};

export default findNearestCity;

// const providedLatitude = 27.035527;
// const providedLongitude = 82.216540;
