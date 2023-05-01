// Input Variables
let first_name_input = document.getElementById("first-name");
let last_name_input = document.getElementById("last-name");
let email_input = document.getElementById("email-input");
let username_input = document.getElementById("username");
let password_input = document.getElementById("password");
let re_password_input = document.getElementById("re-password");
let sign_up_btn = document.getElementById("sign_up_btn");
// Warning Variables
let username_warning = document.getElementById("username-warning");
let password_warning = document.getElementById("password-warning");
let re_password_warning = document.getElementById("re-password-warning");
let first_name_warning = document.getElementById("first-name-warning");
let last_name_warning = document.getElementById("last-name-warning");
let email_warning = document.getElementById("email-warning");
// Modal Variables
let modal = document.getElementById("modal");
let modal_bg = document.getElementById("modal-bg");

sign_up_btn.onclick = function () {
  // Reset warning display
  username_warning.classList.add("no-display");
  password_warning.classList.add("no-display");
  re_password_warning.classList.add("no-display");
  first_name_warning.classList.add("no-display");
  last_name_warning.classList.add("no-display");
  email_warning.classList.add("no-display");

  // First name check
  if (first_name_input.value.length == 0)
    first_name_warning.classList.remove("no-display");

  // Last name check
  if (last_name_input.value.length == 0)
    last_name_warning.classList.remove("no-display");

  // Email check
  function checkEmail(){
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email_input.value))
      email_warning.classList.remove('no-display');
  }
  checkEmail();

  // Username check
  if (username_input.value.length < 4)
    username_warning.classList.remove("no-display");

  // Password check
  if (password_input.value.length < 8)
    password_warning.classList.remove("no-display");

  // Re-password check
  if (password_input.value != re_password_input.value)
    re_password_warning.classList.remove("no-display");

  // IF ALL CONDITIONS ARE TRUE
  if (
    first_name_input.value.length > 0 &&
    last_name_input.value.length > 0 &&
    username_input.value.length >= 4 &&
    password_input.value.length >= 8 &&
    password_input.value == re_password_input.value
  ) {
    modal.classList.remove("no-display");
    modal_bg.classList.remove("no-display");
  }

  localStorage.setItem("stored_username", username_input.value);
  localStorage.setItem("stored_password", password_input.value);
  localStorage.setItem("stored_first_name", first_name_input.value);
  localStorage.setItem("stored_last_name", last_name_input.value);
  // inside ( , ) first thing we write is variable name, second one is the value given to that variable in storage
};
