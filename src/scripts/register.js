
const username = document.querySelector("#username-register");
const useremail = document.querySelector("#useremail-register");
const password = document.querySelector("#password-register");
const checkbox = document.querySelector("#checkbox-register");
const button = document.querySelector("#button-register");

button.addEventListener('click', (event) => {
    event.preventDefault();

    const usernameValue = username.value;
    const useremailValue = useremail.value;
    const passwordValue = password.value;

    if( usernameValue === "" || useremailValue === "" || passwordValue === ""){
        window.alert("Please fill in all the fields");
        return;
    }

    sessionStorage.setItem("username" , usernameValue);
    sessionStorage.setItem("useremail" , useremailValue);
    sessionStorage.setItem("password" , passwordValue);

    window.location.href = "login.html";

});