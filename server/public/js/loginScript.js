const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const formSignup = document.querySelector("form");
const messageErrorEmail = document.querySelector(".message-error-email");
const messageErrorPassword = document.querySelector(".message-error-senha");
const messageErrorUser = document.querySelector("message-error-user");

formSignup.onsubmit = (e) => {
   e.preventDefaul()

    console.log(messageErrorUser.value);

    if(inputEmail.value===""){
        
        messageErrorEmail.style.display="block";
        inputEmail.style.borderColor ="#DC453A"
    }
    if(inputPassword.value===""){
        messageErrorPassword.style.display="block";
        inputPassword.style.borderColor ="#DC453A"
    }
    if(inputEmail.value===""&&inputPassword.value==="" ){
        messageErrorEmail.style.display="block";
        inputEmail.style.borderColor ="#DC453A";
        messageErrorPassword.style.display="block";
        inputPassword.style.borderColor ="#DC453A"
    }
    if(messageErrorUser){
        messageErrorEmail.style.display="block";
        inputEmail.style.borderColor ="#DC453A";
        messageErrorPassword.style.display="block";
        inputPassword.style.borderColor ="#DC453A"
        messageErrorEmail.style.color="#DC453A";
        messageErrorPassword.style.color="#DC453A";
    }
    

}