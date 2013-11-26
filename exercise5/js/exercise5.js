function CheckEffect (check) {
  var mainCheckBox = check.id + "Box";
  var hiddenList = document.getElementById(mainCheckBox);
  var hiddenListContents = document.getElementsByName(mainCheckBox);
  if(check.checked == true) {
    hiddenList.style.display = "block";
    for (i = 0; i< hiddenListContents.length; i++) {
      hiddenListContents[i].checked = true;
    }
    check.scrollIntoView(true);
  }
  else { 
    hiddenList.style.display = "none";
    for (i=0;i< hiddenListContents.length;i++) {
      hiddenListContents[i].checked = false;
    }
  }
}