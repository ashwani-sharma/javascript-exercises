function checkAll(value){
  var childCheck = document.form1.slave;
  for (var i=0; i<childCheck.length; i++) {
    childCheck[i].checked = value;
  }
  return false;
}