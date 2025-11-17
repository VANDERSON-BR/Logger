
const username = document.querySelector("#username-register");
const email = document.querySelector("#email-register");
const password = document.querySelector("#password-register");
const checkbox = document.querySelector("#checkbox-register");
const button = document.querySelector("#button-register");

button.addEventListener('click', (event) => {
    event.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if( usernameValue === "" || emailValue === "" || passwordValue === ""){
        window.alert("Please fill in all the fields");
        return;
    };
    
    if(!validatePassword()){
        window.alert("requirements not met");
        return;
    };

    //criando novas chaves com seus respectivos valores
    sessionStorage.setItem("username" , usernameValue);
    sessionStorage.setItem("email" , emailValue);
    sessionStorage.setItem("password" , passwordValue);


    window.location.href = "login.html";

});

checkbox.addEventListener("change" , () => {
    
    const type = password.getAttribute("type");

    if(type !== "password"){
        password.setAttribute("type" , "password");
        return;
    }

    password.setAttribute("type" , "text");

});
