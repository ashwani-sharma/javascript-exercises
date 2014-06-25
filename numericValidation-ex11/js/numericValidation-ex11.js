var numRegEx = /^([+]|[-])?\d+(\.[\d]+)?$/;

var NumericValueValidation = function () {
  this.form = document.getElementById("user-form");
  this.numberField = document.getElementById("number");
  this.resultField = document.getElementById("result");
}

NumericValueValidation.prototype = {
  validateNumber: function () {
    var obj = this,
        checkEnteredValue = numRegEx.test(this.numberField.value);

    if(checkEnteredValue) {
      obj.resultField.value = "True";

      setTimeout ( function() {
        obj.form.submit();
      }, 1000);
    }
    else {
      obj.resultField.value = "False";
      alert("Please enter a valid number");
      obj.numberField.value = "";
      obj.numberField.focus();
      return false;
    }
  },

  formFieldsValidation: function () {
    var obj = this;
    obj.form.onsubmit = function () {
      if(obj.validateNumber()) {
        return true;
      }
      return false;
    }
  }
}

window.onload = function () {
  var validationResult = new NumericValueValidation();
  validationResult.formFieldsValidation();
}