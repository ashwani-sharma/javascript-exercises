function getURL(){
  this.url = "";
  this.enteredURL();
}

getURL.prototype.enteredURL = function () {
  this.url = prompt("Please enter a URL you want to open", "");
  if (this.url == null || this.url.length == 0) {
    alert("Can't be empty! Please enter URL again");
    this.enteredURL();
  }
  else {
    var newURL = "http://" + this.url,
        newWindow = "height=450px, location=0, menubar=0, scrollbars=0, status=0, titlebar=0, toolbar=0, width=400px";
        
    window.open(newURL, "", newWindow);
  }  
}

var newPage = new getURL();