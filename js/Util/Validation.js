/**
 * Represents input field for the user's first name.
 * @type {HTMLElement}
 */
let fname = document.querySelector('#fname');
/**
 * Represents input field for the user's last name.
 * @type {HTMLElement}
 */
let lname = document.querySelector('#lname');
/**
 * Represents input field for the user's email address.
 * @type {HTMLElement}
 */
let email = document.querySelector('#email');
/**
 * Represents button element that submits the form.
 * @type {HTMLElement}
 */
let submitButton = document.querySelector('.submit-form');
/**
 * Represents span element that displays error messages.
 * @type {HTMLElement}
 */
let spanElement = document.createElement('span');

    /**
 * Event listener which checks if the user's first name input is valid or not.
 * @param {Event} o - The change event object.
 */
    fname.addEventListener('change', o => {
        let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        if(!regName.test(fname.value)){
            fname.style.border = "2px solid red";
            fname.style.color = "red";
            submitButton.disabled = true;
            submitButton.classList.toggle('disabled-button');
             
            spanElement.innerHTML = "Please type valid name";
            document.body.appendChild(spanElement);
        }
        else{
            fname.style.border = "1px solid black";
            fname.style.color = "black";
            submitButton.disabled = false;
            submitButton.classList.toggle('disabled-button');
            document.body.removeChild(spanElement);
        }
    });
    /**
 * Event listener which checks if the user's last name input is valid or not.
 * @param {Event} o - The change event object.
 */
    lname.addEventListener('change', o =>{
        let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        
        if(!regName.test(lname.value)){
            lname.style.border = "2px solid red";
            lname.style.color = "red"; 
            submitButton.disabled = true;
            submitButton.classList.toggle('disabled-button');
             
            spanElement.innerHTML = "Please type valid last name";
            document.body.appendChild(spanElement);
        }
        else{
            lname.style.border = "1px solid black";
            lname.style.color = "black";
            submitButton.disabled = false;
            submitButton.classList.toggle('disabled-button');
            document.body.removeChild(spanElement);
    
        }
    });
    /**
 * Event listener which checks if the user's email address input is valid or not.
 * @param {Event} o - The change event object.
 */
    email.addEventListener('change', o=> {
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!regEmail.test(email.value)){
            email.style.border = "2px solid red";
            email.style.color = "red";
            submitButton.disabled = true;
            submitButton.classList.toggle('disabled-button');
             
            spanElement.innerHTML = "Please type valid email";
            document.body.appendChild(spanElement);
        }
        else{
            email.style.border = "1px solid black";
            email.style.color = "black";
            submitButton.disabled = false;
            submitButton.classList.toggle('disabled-button');
            document.body.removeChild(spanElement);
    
        }
    });

