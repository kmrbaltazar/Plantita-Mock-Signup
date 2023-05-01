// Linked to local storage in scripts.js
let firstname_login = localStorage.getItem("stored_first_name");
document.getElementById("fname_welcome").innerHTML = firstname_login;

// Linked to stored username 
let username_welcome = localStorage.getItem('stored_username');
document.getElementById('username_welcome').innerHTML =  username_welcome;

let lastname_login = localStorage.getItem('stored_last_name');

// initials
document.getElementById('initials').innerHTML = firstname_login[0] + lastname_login[0];

