const titleUser = document.querySelector("#titleUser");
const username = sessionStorage.getItem("username");

titleUser.textContent = `Hello ${username} !`;