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
      
      var matchedDomainStr = "Domain: " + RegExp.$2;
      if(RegExp.$1) {
        matchedDomainStr += "\n Sub Domain: " + RegExp.$1;
      }
      alert(matchedDomainStr);
    }
  }
}

window.onload = function () {
  var domainResult = new domainMatch();
  domainResult.displayDomainInfo();
}