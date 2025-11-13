const email = document.querySelector("#email-recovery");
const password = document.querySelector("#password-recovery");
const passwordConfirm = document.querySelector("#password-recovery-confirm");
const checkbox = document.querySelector("#checkbox-recovery");
const button = document.querySelector("#button-recovery");

button.addEventListener("click" , (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordValueConfirm = passwordConfirm.value;
    

    if( emailValue == "" || passwordValue == "" || passwordValueConfirm == ""){
        window.alert("Please fill in all the fields");
        return;
    }

    const emailSession = sessionStorage.getItem("email");

    if(emailSession !== emailValue){
        window.alert("insert email is invalid or don't exist !");
        return;
    }

    if(passwordValue !== passwordValueConfirm){
        window.alert("passwords don't match");
        return;
    }

    sessionStorage.setItem("password", passwordValue);

    window.alert("success");
    window.location.href = "login.html";
});

checkbox.addEventListener("change" , ()=>{

    const type = password.getAttribute("type");

    if(type !== "password"){
        password.setAttribute("type","password");
        passwordConfirm.setAttribute("type","password");
        return;
    }
    
    passwordConfirm.setAttribute("type","text");
    password.setAttribute("type","text");

});
