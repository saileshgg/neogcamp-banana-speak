var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickEvent() {
    outputDiv.innerText = "This is from text area -- " + txtInput.value
};

btnTranslate.addEventListener("click", clickEvent);



