const display = document.getElementById('display');

/* let = var that will be changed, const = var that will not be changed */

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = '';

}


function calculate(){
    try{
        display.value = eval(display.value);

    } catch (error){
        display.value = 'Error';
    }
}