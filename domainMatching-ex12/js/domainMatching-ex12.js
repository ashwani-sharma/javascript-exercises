var domainMatch = function () {
  this.urlRegEx = /^(?:(?:http|https|ftp):\/\/)?(?:www\.)?(?:((?:[\w\d\_\-]+\.)*[\w\d\-\_]+)\.)?([\w\d\_\-]+\.[\w\d]{2,4})(?:\/[\w\d\-\_\?\=\&\#\.]+)*$/i;
  this.form = document.getElementById("user-form");
  this.urlField = document.getElementById("url");
  this.urlField.focus();
}

domainMatch.prototype = {
  getValidateUrl: function () {
    var obj = this;
    var enteredValue = this.urlField.value.trim();

    return enteredValue.match(obj.urlRegEx);
  },

  displayDomainInfo: function () {
    var obj = this;

    obj.form.onsubmit = function () {
      if(!obj.getValidateUrl()) {
        alert("Please enter a valid URL");
        obj.urlField.focus();
        return false;
      }
      
      if(!RegExp.$1) {
        alert("Domain: " + RegExp.$2);
      }
      else {
        alert("Domain: " + RegExp.$2 + "\n Sub Domain: " + RegExp.$1);
      }
    }
  }
}

window.onload = function () {
  var domainResult = new domainMatch();
  domainResult.displayDomainInfo();
}