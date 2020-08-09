var form = {
  init: function () {
    this.listener();
  },
  domElements: [
    { firstName: document.getElementById("First-name") },
    { lastName: document.getElementById("Last-name") },
    { email: document.getElementById("email-id") },
    { password: document.getElementById("password") },
    { Form: document.querySelector(".submit-button") },
  ],
  listener: function () {
    this.domElements[4].Form.addEventListener("click", (e) => {
      e.preventDefault();
      this.checkInputs();
    });
  },

  checkInputs: function () {
    const userName = this.domElements[0].firstName;
    const lastName = this.domElements[1].lastName;
    const email = this.domElements[2].email;
    const password = this.domElements[3].password;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (userName.value.trim() === "") {
      this.setErrorFor(userName, "User name cannot be empty", 0);
    } else {
      this.setSuccessFor(userName, 0);
    }

    if (lastName.value.trim() === "") {
      this.setErrorFor(lastName, "Last name cannot be empty", 1);
    } else {
      this.setSuccessFor(lastName, 1);
    }

    if (email.value.trim() === "" || !emailRegExp.test(email.value.trim())) {
      this.setErrorFor(email, "Looks like this is not an email", 2);
    } else {
      this.setSuccessFor(email, 2);
    }

    if (password.value.trim() === "") {
      this.setErrorFor(password, "Password cannot be empty", 3);
    } else {
      this.setSuccessFor(password, 3);
    }
  },

  setErrorFor: function (input, message, index) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    const changeImage = formControl.querySelector("i");
    small.innerText = message;
    input.className = "error-box";
    changeImage.className = "exclamation";
    console.log(formControl);
  },

  setSuccessFor: function (input, index) {
    const formControl = input.parentElement;
    const changeImage = formControl.querySelector("i");
    const small = formControl.querySelector("small");
    small.innerText = "";
    input.className -= "";

    changeImage.className = "";
  },
};

form.init();
