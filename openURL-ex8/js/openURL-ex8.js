function PopupWindow () {
  this.url = "";
}

PopupWindow.prototype = {
  init: function () {
    this.getUrl();
    this.open();
  },

  getUrl: function () {
    this.url = prompt("Enter the url you want to open in saparate window").trim() || "";
    this.validate();
  },

  validate: function () {
    while (this.url == "") {
      alert("Can't be empty! Please enter URL again");
      this.getUrl();
    }
  },

  open: function () {
    var newURL = "http://" + this.url,
        options = "height=450px, location=0, menubar=0, scrollbars=0, status=0, titlebar=0, toolbar=0, width=400px";
        
    window.open(newURL, "", options);
  }
}

window.onload = function () {
  (new PopupWindow()).init();
}