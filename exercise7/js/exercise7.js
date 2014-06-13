var userInputValues = function(fname, lname) {
  this.init(fname, lname);
}

userInputValues.prototype = {
  init: function (fname, lname) {
    this.fname = this.promptValues(fname);
    this.lname = this.promptValues(lname);
  },

  promptValues: function (text) {
    var value = "";
    while (value.trim().length == 0) {
      value = prompt("enter your " + text, "");
    }
    return value.trim();
  },

  alertAndPrintValues: function () {
    var message = "Welcome " + this.fname + " " + this.lname + "!",
        elem = document.createElement("div");

    alert(message);
    elem.innerHTML = message;
    document.body.appendChild(elem);
  }
}

window.onload = function () {
  var inputResult = new userInputValues("FirstName", "LastName");
  inputResult.alertAndPrintValues();
}