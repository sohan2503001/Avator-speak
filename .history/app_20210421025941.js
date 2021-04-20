var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?t

function getTranslationURL(text){

}

function clickHandler() {
    outputDiv.innerHTML = "shgshdgshdsahd " + txtInput.value
};

btnTranslate.addEventListener("click" , clickHandler);
