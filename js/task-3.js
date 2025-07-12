const textInput = document.querySelector('input');
const outputName = document.querySelector('#name-output');
let inputName = '';
textInput.addEventListener('input', event => {
  inputName = textInput.value.trim();
  if (inputName !== '') {
    outputName.textContent = inputName;
  } else {
    outputName.textContent = 'Anonymous';
  }
  console.log(outputName.textContent);
  return outputName;
});

//
