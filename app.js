var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input
}

//Error Handling
function errorHandler(error){
    console.log("Error occured", error);
    alert("Something wrong with server: try again later")
}

function clickHandler(){
    var inputTxt = txtInput.value; //Getting  input

    //calling server for processing
    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputDiv.innerText = translatedTxt;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);
