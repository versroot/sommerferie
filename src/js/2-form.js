let formData = { email: '', message: '' };
const formLog = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const emailField = formLog.querySelector('#email');
const textinputField = formLog.querySelector('#textinput');

formLog.addEventListener('submit', submitFunc);
formLog.addEventListener('input', inputFunc);

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  emailField.value = formData.email ?? '';
  textinputField.value = formData.message ?? '';
}
function inputFunc(event) {
  event.preventDefault();
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function submitFunc(event) {
  event.preventDefault();
  formData.email = formData.email.trim();
  formData.message = formData.message.trim();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formLog.reset();
    formData = { email: '', message: '' };
  }
}
