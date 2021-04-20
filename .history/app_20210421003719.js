var btnTranslate = document.query("#btn-translate");
var txtInput = document.query("#txt-input");
var outputDiv = document.query("#output");

console.log(outputDiv);

function clickHandler() {
    console.log("clicked");
    console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click" , clickHandler);
