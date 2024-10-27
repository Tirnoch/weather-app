const setHTML = function () {
  // Container
  const container = document.querySelector('.container');

  // Data Display

  const display = document.createElement('div');
  display.id = 'display';
  container.appendChild(display);

  // Input Display

  let inputContainer = document.createElement('div');
  inputContainer.id = 'input-container';
  container.appendChild(inputContainer);

  display.style.width = inputContainer.style.width;
  display.style.height = inputContainer.style.height;

  // Location
  let locLabel = document.createElement('label');
  locLabel.setAttribute('for', 'location');
  locLabel.textContent = 'Location: ';
  locLabel.id = 'location-label';
  inputContainer.appendChild(locLabel);

  let locInput = document.createElement('input');
  locInput.type = 'text';
  locInput.id = 'location';
  locInput.required = 'true';
  locLabel.appendChild(locInput);

  // Time
  let timeLabel = document.createElement('label');
  timeLabel.setAttribute('for', 'time');
  timeLabel.textContent = 'Time: ';
  timeLabel.id = 'time-label';
  inputContainer.appendChild(timeLabel);

  let timeInput = document.createElement('input');
  timeInput.type = 'date';
  timeInput.min = '2024-10-01';
  timeInput.max = '2024-10-31';
  timeInput.id = 'time';
  timeInput.required = 'true';
  timeLabel.appendChild(timeInput);

  // Submit Button
  let submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.id = 'submit-btn';
  submitBtn.textContent = 'submit';
  inputContainer.appendChild(submitBtn);
};

export default setHTML;
