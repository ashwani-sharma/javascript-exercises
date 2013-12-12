function validateFullName (input) {
  do {
    var name = prompt ("enter your " + input + " name");
    if (name == "" || (name.trim(' ').length==0)) {
      alert("please enter a valid " + input + "name" );
    }
  }
  while (name == false);
  return name;
}

function user () {
  fname = validateFullName("first");
  lname = validateFullName("last");
  message = "Your name is " + fname + " " + lname;
  alert(message);
  createBlock = document.createElement("div");
  createBlock.appendChild(document.createTextNode(message));
  document.body.appendChild(createBlock);
}