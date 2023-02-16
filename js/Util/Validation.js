
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let submitButton = document.querySelector('.submit-form');
let spanElement = document.createElement('span');

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



