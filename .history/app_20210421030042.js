var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text" + text
}

function clickHandler() {
    outputDiv.innerHTML = "shgshdgshdsahd " + txtInput.value


fetch(getTranslationURL)
};
btnTranslate.addEventListener("click" , clickHandler);
