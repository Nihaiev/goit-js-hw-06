const inputForm = document.querySelector('input#name-input');
console.log(inputForm);
const nameLabel = document.querySelector('#name-input');
console.log(nameLabel);
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);

inputForm.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
