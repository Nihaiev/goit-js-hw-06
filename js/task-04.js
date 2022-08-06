let counterValue = 0
const value = document.querySelector('#value')
const minusValue = document.querySelector('button[data-action="decrement"]');
const plusValue = document.querySelector('button[data-action="increment"]');


const handndleMinusBtnClick = () => 
{ counterValue -= 1; value.textContent = counterValue;}
const handndlePlusBtnClick = () => 
{ counterValue +=1; value.textContent = counterValue;}

minusValue.addEventListener('click', handndleMinusBtnClick);
plusValue.addEventListener('click', handndlePlusBtnClick);