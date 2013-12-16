function getCheckBoxes(getClassName) {
  this.uncheckAll = document.getElementById("none");
  this.targetCheck = document.querySelectorAll("input[type='checkbox']." + getClassName);
}
getCheckBoxes.prototype.validateMaxCheck = function(selectedCheckbox) {
  var count = 0;
  var maxGetSelected = 3;
  this.uncheckAll.checked = false;
  for (var i = 0, len = this.targetCheck.length; i < len; i++) {
    if (this.targetCheck[i].checked && !(this.targetCheck[i] == selectedCheckbox)) {
      count++;
    }
  }
  if (count >= maxGetSelected) {
    var selectedDays = new Array();
    selectedCheckbox.checked = false;
    for (var i = 0, len = this.targetCheck.length; i < len; i++) {
      if (this.targetCheck[i].checked) {
        selectedDays.push(this.targetCheck[i].value);
      }
    }
    alert("Only 3 days can be selected. You have already selected " + selectedDays[0] + "," + selectedDays[1] + " and " + selectedDays[2]);
  }
}
getCheckBoxes.prototype.selectNone = function() {
  for (var i = 0, len = this.targetCheck.length; i < len; i++) {
    this.targetCheck[i].checked = false;
  }
}
var dayNames = new getCheckBoxes("days");