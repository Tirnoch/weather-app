const getLocation = function () {
  const inputElement = document.querySelector('#location');
  let inputValue = inputElement.value;
  return inputValue;
};

export default getLocation;
