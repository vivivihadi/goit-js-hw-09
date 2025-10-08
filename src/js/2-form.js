console.log('Form');

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  formData.email = form.email.value;
  formData.message = form.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData = parsedData;
  form.email.value = parsedData.email || '';
  form.message.value = parsedData.message || '';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };
  }
});