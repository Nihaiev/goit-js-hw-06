const inputVal = document.querySelector('#validation-input');
inputVal.addEventListener('blur', onInputHandler);

function onInputHandler(event){
   
    if (event.currentTarget.value.length === Number(inputVal.dataset.length)){
        inputVal.classList.remove('invalid')
        inputVal.classList.add('valid') 
    } else {
        inputVal.classList.remove('valid')
        inputVal.classList.add('invalid')
    }
}