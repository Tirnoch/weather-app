import apiKey from './getKey.js';
import getLocation from './getLocation.js';
import getTime from './getTime.js';
import dataExtractor from './dataExtractor.js';

async function getWeather(location, date) {
  location = getLocation();
  date = getTime();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?unitGroup=metric&key=${apiKey}&include=days`,
      { mode: 'cors' }
    );
    if (!response.ok) {
      const errMsg = await response.text();
      throw new Error(`HTTP error! status: ${errMsg}`);
    }
    const data = await response.json();
    const object = dataExtractor(data);
    // console.log(
    //   `min: ${object.maxTemp} , max: ${object.minTemp} , conditions: ${object.condition}`,
    //   object
    // );
    return object;
  } catch {}
}

export default getWeather;
