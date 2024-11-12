let form = document.getElementById("signUp_form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let pwd = document.getElementById("pwd").value;
  let cpwd = document.getElementById("cpwd").value;
  console.log(fname, lname, email, number, pwd, cpwd);

  if (fname == "" || lname == "" || email == "" || number == "" || pwd == "") {
    alert("Please enter the details");
  } else {
    localStorage.setItem("username", email);
    localStorage.setItem("password", pwd);
    alert("form submitted successfully");
    window.open("./Login.html");
    window.location.reload();
  }
});
