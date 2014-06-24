var Validation = function () {
  this.init();
}

Validation.prototype = {
  init: function () {
    this.form = document.getElementById("user-form");
    this.formFields = document.getElementsByClassName("required");
    this.textArea = document.getElementById("about");
    this.notifications = document.getElementById("notification");
    this.maxCharLength = 50;
  },

  checkAllFields: function () {
    var obj = this,
        len = obj.formFields.length,
        labels = new Array();

    for(i = 0; i < len; i++) {
      if(!obj.formFields[i].value.trim()) {
        labels.push(obj.formFields[i].name);
      }
    }

    if(labels.length > 0) {
      alert(labels + " can't be empty");
      return false;
    }
    return true;
  },

  checkTextAreaCharLength: function () {
    var obj = this,
        charLength = obj.textArea.value.trim().length;

    if(charLength < obj.maxCharLength) {
      alert("Please enter atleast 50 characters to write about yourself.");
      obj.textArea.focus();
      return false;
    }
    return true;
  },

  checkNotificationStatus: function () {
    var obj = this;

    if(!(obj.notifications.checked)) {
      alert("Please click on checkbox to recieve notifications");
      obj.notifications.focus();
      return false;
    }
    return true;
  },

  submitForm: function () {
    var obj = this;

    obj.form.onsubmit = function () {
      if(obj.checkAllFields() && obj.checkTextAreaCharLength() && obj.checkNotificationStatus()) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

window.onload = function () {
  result = new Validation();
  result.submitForm();
}