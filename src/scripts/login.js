const email = document.querySelector("#email-login");
const password = document.querySelector("#password-login");
const checkbox = document.querySelector("#checkbox-login");
const button = document.querySelector("#button-login");

button.addEventListener("click" , (event) => {

    event.preventDefault(); //Faz a verificação de todo o código antes de enviar as informações. Além disso, ele não vai recarregar mais a página, permitindo que entramos em home.html

    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue === "" || passwordValue === ""){
        window.alert("Please fill in all the fields");
        return; 
    };

    const usernameSession = sessionStorage.getItem("username");
    const emailSession = sessionStorage.getItem("email");
    const passwordSession = sessionStorage.getItem("password");

    if(emailSession !== emailValue || passwordSession !== passwordValue){
        window.alert("email or password incorrect");
        return;
    };

    if(!validatePassword()){
        window.alert("requirements not met");
        return;
    };

    window.alert("Access granted !");
    window.location.href = "home.html"

});


checkbox.addEventListener("change" ,() => {

    const type = password.getAttribute("type");

    if(type !== "password"){
        password.setAttribute("type","password");
        return;
    }

    password.setAttribute("type","text");

});
