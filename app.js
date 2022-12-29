var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "Translate: " + txtInput.value
};

btnTranslate.addEventListener("click", clickHandler);
