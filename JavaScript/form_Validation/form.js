let form = document.getElementById("submit_form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("pwd").value;

  if (username == "" || password == "") {
    alert("please fill the details");
  } else {
    alert("logged in successfully!");
    console.log(username, password);
    window.open("./Home.html");
    window.location.reload();
  }
});

let password = document.getElementById("pwd");
let emoji = document.getElementById("emoji");
let show_pwd = document.getElementById("show_pwd");
show_pwd.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value != "") {
    if (password.type == "password") {
      password.type = "text";
      emoji.innerHTML = "🙈";
      show_pwd.innerHTML = "Hide Password";
    } else {
      password.type = "password";
      emoji.innerHTML = "🐵";
      show_pwd.innerHTML = "Show Password";
    }
  } else {
    alert("please enter the password");
  }
});

let username = document.getElementById("username");
let error1 = document.getElementById("error1");
let submit_btn = document.getElementById("submit_btn");

username.addEventListener("input", (e) => {
  e.preventDefault();

  let validation = username.value.length < 8;

  if (validation) {
    username.classList.add("warning");
    username.classList.remove("success");
    submit_btn.disabled = true;
    error1.innerHTML = "Username must be at least 8 characters";
    submit_btn.classList.add("disable");
  } else {
    username.classList.add("success");
    username.classList.remove("warning");
    submit_btn.disabled = false;
    error1.innerHTML = "";
    submit_btn.classList.remove("disable");
  }
});

let error2 = document.getElementById("error2");

password.addEventListener("input", (e) => {
  e.preventDefault();

  let validation = password.value.length < 8;

  if (validation) {
    password.classList.add("warning");
    password.classList.remove("success");
    error2.innerHTML = "Password must be at least 8 characters";
    submit_btn.disabled = true;
    submit_btn.classList.add("disable");
  } else {
    password.classList.add("success");
    password.classList.remove("warning");
    submit_btn.disabled = false;
    error2.innerHTML = "";
    submit_btn.classList.remove("disable");
  }
});
