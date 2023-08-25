const buttonEl = document.querySelectorAll('button');
const inputEl = document.querySelector('#inputEl');


for(let i = 0;i<buttonEl.length;i++)
{
    buttonEl[i].addEventListener('click',()=>{
        const buttonValue = buttonEl[i].textContent;
        console.log(buttonValue);
        if(buttonValue === 'CE')
        {
            clearInputEl();
        }
        else if(buttonValue === '=')
        {
            calculation();
        }
        else{
            appendValue(buttonValue);
        }
    })
}

const clearInputEl =()=>{
inputEl.value = "";
}
const calculation =()=>{
    inputEl.value = eval(inputEl.value);
}
const appendValue =(buttonValue)=>{
    inputEl.value +=buttonValue;
}
