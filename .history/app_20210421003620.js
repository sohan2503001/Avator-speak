var btnTranslate = document.getElementById("#btn-translate");
var txtInput = document.getElementById("#txt-input");
var outputDiv = document.getElementById("#output");

console.log(outputDiv);

function clickHandler() {
    console.log("clicked");
    console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click" , clickHandler);
