var emailRegEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]{2,}(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
    urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

var RegistrationFormValidation = function () {
  this.form = document.getElementById("user-form");
  this.emailField = document.getElementById("email");
  this.urlField = document.getElementById("homepage");
}

RegistrationFormValidation.prototype = {
  checkValidation: function (input, pattern) {
    if (!pattern.test(input.value)) {
      alert("Please enter a valid " + input.name);
      input.focus();
      return false;
    }
    return true;
  },

  formValidations: function () {
    var obj = this;
    obj.form.onsubmit = function () {
      if (obj.checkValidation(obj.emailField, emailRegEx) && obj.checkValidation(obj.urlField, urlRegEx)) {
        return true;
      }
      return false;
    }
  }
}

window.onload = function () {
  var validationResult = new RegistrationFormValidation();
  validationResult.formValidations();
}