/* Here goes your JS code */

const message = document.querySelector(".main .message");
const btnClickMe = document.querySelector(".main button");
const btnExit = document.querySelector(".popup .exit");
const popup = document.querySelector(".popup");
const email = document.querySelector("form .email");
const password = document.querySelector("form .password");
const terms = document.querySelector("form .terms");
const btnSubmit = document.querySelector("form .submit");

let isEmailCorrect = false;
let isPasswordCorrect = false;
let isCheckboxSelected = false;



function showPopup() {
    popup.classList.toggle('active');
    btnClickMe.classList.remove('active');
}

function hidePopup() {
    popup.classList.remove('active');
    btnClickMe.classList.add('active');
}
// showPopup();
btnClickMe.addEventListener('click', showPopup);
btnExit.addEventListener('click', hidePopup);