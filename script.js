let submitButton = document.getElementById("submitButton");
let textInput = document.getElementById("textInput");
let colorInput = document.getElementById("colorInput");
let myForm = document.querySelector("form");

function submitHandler(event) {   
    event.preventDefault();
    console.log(textInput.value);
    console.log(colorInput.value);
    localStorage.setItem("myStorage", colorInput.value);

}

myForm.addEventListener("submit", submitHandler);
