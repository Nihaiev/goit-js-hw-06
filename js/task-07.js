const inputSizeControl = document.querySelector('#font-size-control');
const outputTextputSize = document.querySelector("#text");

inputSizeControl.addEventListener("input", inputSizeControlHandler);
function inputSizeControlHandler(event) {
    outputTextputSize.style.fontSize = event.currentTarget.value + 'px';
}