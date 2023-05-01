// Linked to local storage in scripts.js
let username_stored = localStorage.getItem("stored_username");
document.getElementById("username_login").value = username_stored;

let password_stored = localStorage.getItem("stored_password");
let password_input_login = document.getElementById("password_login");
let log_in_btn = document.getElementById("log-in-btn");

// Modal Variables other.html
let modal_other = document.getElementById('modal_other');
let modal_bg_other = document.getElementById('modal-bg_other');

log_in_btn.onclick = function(){
  // check password match
  if (password_input_login.value == password_stored) {
    modal_other.classList.remove("no-display");
    modal_bg_other.classList.remove("no-display");
  }
};
