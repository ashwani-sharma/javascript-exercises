var formValidation = function () {
  this.init();
}

formValidation.prototype = {
  init: function () {
    this.requiredFields = document.getElementsByClassName("required");
    this.requiredTextArea = document.getElementById("about");
    this.requiredCheck = document.getElementById("notification");
  },

  checkFields: function () {
    var obj = this,
        check = true;

    for(i=0; i<obj.requiredFields.length; i++) {
      if(obj.requiredFields[i].value.trim().length == 0) {
        alert("Please enter "+ obj.requiredFields[i].name);
        obj.requiredFields[i].focus();
        return false;
      }
    }
    return check;
  },

  checkTextAreaCharLimit: function () {
    var obj = this,
        check = true;
        currentCharLength = obj.requiredTextArea.value.trim().length;

    if(currentCharLength < 50) {
      alert("Please use atleast 50 character to write about yourself");
      obj.requiredTextArea.focus();
      check = false;
    }
    return check;
  },

  checkNotificationSelection: function () {
    var obj = this,
        check = true;
    if(!(obj.requiredCheck.checked)) {
      alert("Please click on checkbox to receive notifications");
      check = false
    }
    return check;
  },

  checkAllValidations: function () {
    var obj = this,
        check = false;

    check = obj.checkFields() && obj.checkTextAreaCharLimit() && obj.checkNotificationSelection();
    return check;
  }
}

window.onload = function () {
  var validationResult = new formValidation(),
      form = document.getElementById("user-form");

  form.onsubmit = function () {
    return validationResult.checkAllValidations();
  }
}