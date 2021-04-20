var btnTranslate = document.getElementById("#btn-translate");
var textInput = document.getElementById("#txt-input");
var outputDiv = document.getElementById("#output");

console.log(outputDiv);

function clickHandler() {
    console.log("Clicked");
    console.log("input" , textInput.value)
};

btnTranslate.addEventListener("click" , clickHandler);
