const confirmUser = () => {
  const username = document.getElementById("user");
  const password = document.getElementById("pass");
  const member = document.getElementById("notMember");
  const logIn = document.getElementById("log-in");
  const wrongPass = document.getElementById("wrongPass");
  const admin = "admin";

  logIn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  username.addEventListener("input", (e) => {
    const thisTarget = e.target;
    if (thisTarget.value === admin) {
      password.className = "show";
      member.className = "hide";
    } else {
      password.className = "hide";
      member.className = "show";
      wrongPass.className = "hide";
    }
  });
};

confirmUser();
// END OF THE FIND USER FUNCTION

// START OF THE PASSWORD FUNCTION
const logInUser = () => {
  const pass = document.getElementById("pass").value;
  const userPassword = "password";
  const wrongPass = document.getElementById("wrongPass");
  const logIn = document.getElementById("log-in");

  logIn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  if (pass === userPassword) {
    window.location.href = "../success.html";
  } else {
    wrongPass.className = "show";
  }
};
