var register = document.getElementById("userForm");
var formElements = {
  textareaAbout : document.getElementById("about-me"),
  checkbox : document.getElementById("notification"),
};
register.addEventListener("submit" ,formvalidation);
function formvalidation(e) {
  var flag = false;
  var element = document.getElementsByClassName("inputvalue");
  for (var i = 0; i < element.length; i++) {
    var text = element[i].value.trim(' ');
    if(text === "") {
      alert(element[i].id + " cant be left empty");
      flag = true;
      break;
    }
  }
  if (formElements.textareaAbout.value.trim(' ').length < 50 & flag == false) {
    alert(" About Me should be minimum 50 characters");
    flag = true;
  } 
  if (notification.checked) {
    textstring = "want";
  }
  else {
    textstring = "dont want";
  }
  if (! flag) {
    if (confirm("Are you sure you " + textstring + " to receive any notificiaction")) {
    }
    else {
      flag = true;
    }
  }
  if (flag) {
    e.preventDefault();
  }
}