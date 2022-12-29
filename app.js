var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-area");

console.log(txtInput)
function clickHandler(){
    console.log("Clicked!!")
    console.log("input", txtInput.value)
}

btnTranslate.addEventListener("click", clickHandler);
