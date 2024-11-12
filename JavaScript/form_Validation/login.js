let form = document.getElementById("login_form");
console.log(form);

form.addEventListener("submit", (e) => {
  let loginName = document.getElementById("email").value;
  let loginPwd = document.getElementById("pwd").value;
  let username = document.getElementById("username");
  let pwd = document.getElementById("password");
  if (loginName == "" || loginPwd == "") {
    alert("Please enter your login details");
  } else if (loginName == username && loginPwd == pwd) {
    alert("Please enter correct details");
  } else {
    alert("login successfully");
    window.open("./Home.html");
    window.location.reload;
  }
});
