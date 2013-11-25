function getCheckBoxes (thisClass) {
  this.findCheckBoxes = document.getElementsByClassName(thisClass);
}
getCheckBoxes.prototype.selectAllOrNone = function (thisStatus) {
  for (var i = 0; i < this.findCheckBoxes.length; i++) {
    this.findCheckBoxes[i].checked = thisStatus;
  }
  return false;
}
var allCheckboxes = new getCheckBoxes("slave");