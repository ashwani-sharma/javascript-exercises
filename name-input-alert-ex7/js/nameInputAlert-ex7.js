var user = function(firstName, lastName) {
  this.init(firstName, lastName);
}

user.prototype = {
  init: function (firstName, lastName) {
    this.firstName = this.getUserDetails(firstName);
    this.lastName = this.getUserDetails(lastName);
  },

  getUserDetails: function (text) {
    var value = "";
    while (value.trim().length == 0) {
      value = prompt("enter your " + text, "");
    }
    return value.trim();
  },

  displayUserDetails: function () {
    var message = "Welcome " + this.firstName + " " + this.lastName + "!",
        elem = document.createElement("div");

    alert(message);
    elem.innerHTML = message;
    document.body.appendChild(elem);
  }
}

window.onload = function () {
  var userDetails = new user("FirstName", "LastName");
  userDetails.displayUserDetails();
}