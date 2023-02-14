let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');

fname.addEventListener('change', o => {
    let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    console.log(fname.value);
    console.log(!regName.test(fname.value));
    if(!regName.test(fname.value)){
        fname.style.border = "2px solid red";
        fname.style.color = "red";
    }
    else{
        fname.style.border = "1px solid black";
        fname.style.color = "black";
    }
});

lname.addEventListener('change', o =>{
    let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    
    if(!regName.test(lname.value)){
        lname.style.border = "2px solid red";
        lname.style.color = "red";
    }
    else{
        lname.style.border = "1px solid black";
        lname.style.color = "black";
    }
});

email.addEventListener('change', o=> {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regEmail.test(email.value)){
        email.style.border = "2px solid red";
        email.style.color = "red";
    }
    else{
        email.style.border = "1px solid black";
        email.style.color = "black";
    }
});