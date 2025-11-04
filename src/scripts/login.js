const username = document.querySelector("#username-login");
const password = document.querySelector("#password-login");
const checkbox = document.querySelector("#checkbox-login");
const button = document.querySelector("#button-login");


button.addEventListener("click" , (event) => {

    const usernameValue = username.value;
    const passwordValue = password.value;

    if(usernameValue === "" || passwordValue === ""){
        event.preventDefault(); // Evita de enviar as informações passadas no input
        window.alert("Please fill in all the fields");
        return; 
    }

    if(usernameValue !== "vanderson@gmail.com" || passwordValue !== "123456"){
        event.preventDefault();
        window.alert("Incorrect username or password !");
        return; 
    }

    window.alert("Acess granted !")
    

});