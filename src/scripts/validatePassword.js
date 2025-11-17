const messageError = document.getElementById("message-error");
const capital = document.getElementById("capital");
const lowerCase = document.getElementById("lowercase");
const number = document.getElementById("number");
const specialCharacter = document.getElementById("specialCharacter");
const length = document.getElementById("length");

password.addEventListener("focus" , ()=>{
    messageError.style.display = "block";
});

password.addEventListener("blur" , ()=>{
    messageError.style.display = "none";
});

password.addEventListener("keyup" , (event)=>{
    validatePassword();
});

function validatePassword(){

    const capitalLetters = /[A-Z]/;

    if(password.value.match(capitalLetters)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    };

    const lowerCaseLetters = /[a-z]/;

    if(password.value.match(lowerCaseLetters)){
        lowerCase.classList.remove("invalid");
        lowerCase.classList.add("valid");
    } else {
        lowerCase.classList.remove("valid");
        lowerCase.classList.add("invalid");
    };

    const numbers = /[0-9]/;

    if(password.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    };

    const specialCharacterLetters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ ;

    if(password.value.match(specialCharacterLetters)){
        specialCharacter.classList.remove("invalid");
        specialCharacter.classList.add("valid");
    } else {
        specialCharacter.classList.remove("valid");
        specialCharacter.classList.add("invalid");
    };

    if(password.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    };

    const hasCapital = password.value.match(capitalLetters);
    const hasLowerCase = password.value.match(lowerCaseLetters);
    const hasNumber = password.value.match(numbers);
    const hasSpecialCharacterLetters = password.value.match(specialCharacterLetters);
    
    // if(!hasCapital || !hasLowerCase || !hasNumber || !hasSpecialCharacterLetters || !password.value.length >= 8){
    //     return false;
    // } else {
    //     return true;
    // }
    
    return hasCapital && hasLowerCase && hasNumber && hasSpecialCharacterLetters && password.value.length >= 8;

};



// Eventos que podem recarregar a página:

// ✅ submit (em formulários) - PRECISA de preventDefault()
// ✅ click (em botões dentro de <form>) - PRECISA de preventDefault()

// Eventos que NÃO recarregam a página:

// ❌ keyup - NÃO precisa de preventDefault()
// ❌ focus - NÃO precisa de preventDefault()
// ❌ blur - NÃO precisa de preventDefault()
// ❌ change - NÃO precisa de preventDefault()