var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(outputDiv);

function clickHandler() {
    outputDiv.innerHTML = "shgshdgshdsahd " + txtInput.value
};

btnTranslate.addEventListener("click" , clickHandler);
