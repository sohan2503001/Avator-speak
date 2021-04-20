var btnTranslate = document.getElementById("#btn-translate");
var textInput = document.getElementById("#txt-input");
var outputDiv = document.getElementById("#")

console.log(textInput);

function clickHandler() {
    console.log("Clicked");
    console.log("input" , textInput.value)
};

btnTranslate.addEventListener("click" , clickHandler);
