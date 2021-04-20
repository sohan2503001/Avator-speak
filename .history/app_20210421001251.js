var btnTranslate = document.getElementById("#btn-translate");
var textInput = document.getElementById("#text-input");

console.log(textInput);

function clickHandler() {
    console.log("CLicked");
    console.log("input" , textInput.value)
}

btnTranslate.addEventListener("click" , clickHandler);
