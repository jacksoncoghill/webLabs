/*Author: Jackson Coghill #041089141
File: script.js
Date: July 22, 2023
Purpose: JavaScript for Weekly Kitten Pictures Subscription's registration.html
*/
function validate() {

    event.preventDefault();

    //constant values for all of our form input variables
    const email = document.querySelector('#email');
    const login = document.querySelector('#login');
    const pass = document.querySelector('#pass');
    const pass2 = document.querySelector('#pass2');

    const newsletter = document.querySelector('#newsletter');
    const terms = document.querySelector('#terms');

    const submit = document.querySelector('#submit');
    const reset = document.querySelector('#reset');

    const errorMsg = document.querySelectorAll('errorMsg');
    errorMsg.forEach(message => message.textContent = '');

    //set our classlist to remove any error, resetting the form
    email.classList.remove('error');
    login.classList.remove('error');
    pass.classList.remove('error');
    pass2.classList.remove('error');

    //defining constants for our functions
    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    };

    const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})");
    return re.test(password);
    };

    //following if statements will use our defined constants to validate user's form input
    if (!isEmailValid(email.value.trim())){
        email.classList.add('error');
        displayErrorMsg(email, 'x Email address should be non-empty with the format xyz@xyz.xyz.');    
    }

    if (!isRequired(login.value) || isBetween(login.value.length, 1, 20)){
        login.classList.add('error');
        displayErrorMsg(login, 'x User name should be non-empty, and within 20 characters long.');
    } else {
        login.value = login.value.toLowerCase();
    }
    
    if (isBetween(pass.value.length, 0, 5)){
        pass.classList.add('error');
        pass2.classList.add('error');
        displayErrorMsg(pass, 'x Password should be at least 6 characters: 1 uppercase, 1 lowercase.');
        displayErrorMsg(pass2, 'x Please retype password.')
    } else if (isPasswordSecure(pass.value)){
        pass.classList.add('error');
        pass2.classList.add('error');
        displayErrorMsg(pass, 'x Password should be at least 6 characters: 1 uppercase, 1 lowercase.');
        displayErrorMsg(pass2, 'x Please retype password.');
    }

    if (pass.value !== pass2.value){
        pass.classList.add('error');
        pass2.classList.add('error');
        displayErrorMsg(pass, 'x Password should be at least 6 characters: 1 uppercase, 1 lowercase.');
        displayErrorMsg(pass2, 'x Please retype password.')
    }

    if (newsletter.checked){
        alert('Warning: By selecting to receive newsletter, user may receive possible spam emails.');
    }

    if (!terms.checked){
        displayErrorMsg(terms.nextElementSibling, 'x Please accept the terms and conditions.')
    }
    
    //function for displaying error messages when the validation is not met
    function displayErrorMsg(inputElement, message){
        const errorMsgElement = inputElement.nextElementSibling;
        errorMsgElement.textContent = message;
    }

}
