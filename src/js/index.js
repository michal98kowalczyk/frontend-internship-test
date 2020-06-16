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

}

function hidePopup() {
    popup.classList.remove('active');

    password.value = "Password";
    email.value = "E-mail";
    terms.checked = false;
    isCheckboxSelected = false;
    isEmailCorrect = false;
    isPasswordCorrect = false;
}


email.addEventListener('click', () => {
    email.value = "";
})
password.addEventListener('click', () => {
    password.value = "";
})

function validateEmail() {
    const re = /\S+@\S+\.\S+/;
    isEmailCorrect = re.test(email.value);

    if (!isEmailCorrect) {
        alert("Email is incorrect!");
        email.value = "E-mail"
    }
}

function validatePassword() {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");;
    isPasswordCorrect = re.test(password.value);

    if (!isPasswordCorrect) {
        alert("Password must contain at least 1 uppercase, numeric and special character!");
        password.value = "Password"
    }
}



const submitForm = (e) => {
    e.preventDefault();


    if (isCheckboxSelected && isEmailCorrect && isPasswordCorrect) {
        setTimeout(hidePopup, 3000);

        btnClickMe.classList.remove('active');
        message.classList.add('active');
        btnSubmit.removeEventListener('click', submitForm);

    } else {
        alert("Form is incompleted!")
    }


}



btnClickMe.addEventListener('click', showPopup);
btnExit.addEventListener('click', hidePopup);
email.addEventListener('change', validateEmail);
password.addEventListener('change', validatePassword);
terms.addEventListener('click', () => {
    isCheckboxSelected = !isCheckboxSelected;
})


btnSubmit.addEventListener('click', submitForm);