function OpenPopupWindow () {
  this.url = "";
}

OpenPopupWindow.prototype = {
  getEnteredUrl: function () {
    this.url = (prompt("Enter the url you want to open in saparate window") || "").trim();
  },

  openEnteredUrl: function () {
    var obj = this;

    obj.getEnteredUrl();    
    while (obj.url == "") {
      alert("Can't be empty! Please enter URL again");
      obj.getEnteredUrl();
    }
    obj.openNewWindow();
  },

  openNewWindow: function () {
    var newURL = "http://" + this.url,
        options = "height=450px, location=0, menubar=0, scrollbars=0, status=0, titlebar=0, toolbar=0, width=400px";
        
    window.open(newURL, "", options);
  }
}

window.onload = function () {
  var newPopupWindow = new OpenPopupWindow();
  newPopupWindow.openEnteredUrl();
}