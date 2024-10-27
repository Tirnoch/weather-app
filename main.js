import setHTML from './source/setHTML.js';
import setData from './source/setData.js';

setHTML();

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', setData);
