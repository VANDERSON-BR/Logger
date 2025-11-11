const useremail = document.querySelector("#useremail-login");
const password = document.querySelector("#password-login");
const checkbox = document.querySelector("#checkbox-login");
const button = document.querySelector("#button-login");


button.addEventListener("click" , (event) => {

    event.preventDefault();

    const useremailValue = useremail.value;
    const passwordValue = password.value;

    if(useremailValue === "" || passwordValue === ""){
        window.alert("Please fill in all the fields");
        return; 
    }

    const usernameSession = sessionStorage.getItem("username");
    const useremailSession = sessionStorage.getItem("useremail");
    const passwordSession = sessionStorage.getItem("password");

    if(useremailSession !== useremailValue || passwordSession !== passwordValue){
        window.alert("email or password incorret");
        return;
    }

    window.alert("Acess granted !");
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