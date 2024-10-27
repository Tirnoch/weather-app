const getTime = function () {
  const inputElement = document.querySelector('#time');
  let inputValue = inputElement.value;
  return inputValue;
};

export default getTime;
