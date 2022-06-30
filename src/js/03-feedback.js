import throttle from "lodash.throttle";


// local storage form data key
const FORM_DATA_STORAGE_KEY = 'feedback-form-state';
// form data storage
const formData = {};
// form fields
const formFields = {
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
}

/* if localStorage has data
 * fill formData object from local storage
 * fill form fields of values from local storage 
*/
if(localStorage.getItem(FORM_DATA_STORAGE_KEY)) {
  const localStorageParseData = JSON.parse(localStorage.getItem(FORM_DATA_STORAGE_KEY));
  const keys = Object.keys(localStorageParseData);

  fillFormDataFromLocalStorage(keys, localStorageParseData);
  fillFormFromLocalStorage(keys, localStorageParseData);
}

// create input and submit event listener on form
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(updateLocalStorage, 500));
form.addEventListener('submit', formSubmit);

// update formData object specific field and save formData object in local storage
function updateLocalStorage(event) {
  // change formData object
  formData[event.target.name] = event.target.value;
  // set local storage for form data
  localStorage.setItem(FORM_DATA_STORAGE_KEY, JSON.stringify(formData));
}

// fill formData object from local storage
function fillFormFromLocalStorage(keys, dataLocalStorage) {
  for(const key of keys) {
    formData[key] = dataLocalStorage[key];
  }
}

// fill form fields in HTML from local storage
function fillFormDataFromLocalStorage(dataKeys, dataLocalStorage) {
  for(const key of dataKeys) {
    formFields[key].value = dataLocalStorage[key];
  }
}

function formSubmit(event) {
  // cancel page reload
  event.preventDefault();

  // clear form data from locale storage
  localStorage.removeItem(FORM_DATA_STORAGE_KEY);
  // clear form fields
  this.reset();
  console.log(formData);
  formData = {};
}
