// login page js
console.log("hello world");

const userAlert = document.getElementById("userAlert");
const passwordAlert = document.querySelector(".passwordAlert");
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
var usernameVal = username.value.trim();
var passwordVal = password.value.trim();

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var usernameVal = username.value.trim();
  var passwordVal = password.value.trim();

  // formVaidation
  if (validate()) {
    //AJAX user confirmation
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "login.json", true);

    xhr.onload = function () {
      if (this.status == 200) {
        var users = JSON.parse(this.responseText);

        for (var i in users) {
          // console.log(users[i].gokulusername)
          if (
            usernameVal === users[i].gokulusername &&
            passwordVal === users[i].gokulpassword
          ) {
            userConformation = true;
            console.log(usernameVal + " is logged in!!!");
            return;
          }
        }
        console.log("user not found");
      }
    };
    xhr.send();
  }
});

// formVaidation
function validate() {
  var validationPassed = true;
  var usernameVal = username.value.trim();
  var passwordVal = password.value.trim();

  if (usernameVal === "" && passwordVal === "") {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>PLEASE FILL IN ALL REQUIRED FIELDS.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (usernameVal.length <= 3 && passwordVal === "") {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Username must be more than 3 characters !! </strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (passwordVal.length <= 6 && usernameVal === "") {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Password must be more than 6 characters !!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (usernameVal.length <= 3 && passwordVal.length <= 6) {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Your username must be 3 characters long and password 6 characters !!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (usernameVal.length > 3 && passwordVal === "") {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Please Enter Password !! </strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (passwordVal.length > 6 && usernameVal === "") {
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show"  role="alert">
        <strong>Please Enter Username !! </strong>
        <button type="button" class="close" data-dismiss="alert"    aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (passwordVal.length > 6 && usernameVal.length <= 3) {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade   show"role="alert">
        <strong>Username must be more than 3 characters !!</strong>
        <button type="button" class="close"     data-dismiss="alert"aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  } else if (usernameVal.length > 3 && passwordVal.length <= 6) {
    validationPassed = false;
    userAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Password must be more than 6 characters !!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
  }
  return validationPassed;
}
