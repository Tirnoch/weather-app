import getWeather from './getWeather.js';

async function setData() {
  const object = await getWeather();
  const display = document.querySelector('#display');

  let cond = document.createElement('h1');
  cond.textContent = `Condition: ${object.condition}`;
  let max = document.createElement('h2');
  max.textContent = `Max Temperature ${object.maxTemp}`;
  let min = document.createElement('h2');
  min.textContent = `Min Temperature ${object.minTemp}`;

  display.appendChild(cond);
  display.appendChild(max);
  display.appendChild(min);
  console.log(
    `we have cond: ${object.cond}, max: ${object.maxTemp}, min: ${object.minTemp}`
  );
}
export default setData;
