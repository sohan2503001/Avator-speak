var btnTranslate = document.qui("#btn-translate");
var txtInput = document.qui("#txt-input");
var outputDiv = document.qui("#output");

console.log(outputDiv);

function clickHandler() {
    console.log("clicked");
    console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click" , clickHandler);
