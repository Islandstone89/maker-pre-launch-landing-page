
/* SELECTORS */

let form = document.querySelector(".form");
let emailInput = document.querySelector(".email-input");
let errorValue = document.querySelector(".form__error__no-value");
let errorEmail = document.querySelector(".form__error__no-email");
let successMessage = document.querySelector(".form__success");
let emailSymbol = "@";

/* FUNCTIONS */

function checkValue(e) {
    e.preventDefault();

    if (emailInput.value === "") {
        errorValue.style.display = "block"
        successMessage.style.display = "none"
    }

    else if (!emailInput.value.includes(emailSymbol)) {
        errorEmail.style.display = "block"
        errorValue.style.display = "none"
        successMessage.style.display = "none"
    }
    
    else {
        errorValue.style.display = "none"
        errorEmail.style.display = "none"
        successMessage.style.display = "block"
    }
}

 /*    function test(e) {
        e.preventDefault();

        if (emailInput.value === "") {
            emailInput.setAttribute("aria-invalid", "true")
        }
    } */

/* EVENT LISTENER */

form.addEventListener("submit", checkValue);

/* form.addEventListener("submit", test); */
