var btnTranslate = document.getElementById("#btn-translate");
var textInput = document.getElementById("#txt-input");

console.log(textInput);

function clickHandler() {
    console.log("Clicked");
    console.log("input" , textInput.value)
};

btnTranslate.addEventListener("click" , clickHandler);
