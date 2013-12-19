function checkBox(className) {
  this.noneCheckbox = document.getElementById("none");
  this.allCheckBoxes = document.querySelectorAll("input[type='checkbox']." + className);
}
checkBox.prototype.validateCheck = function(selectedCheckbox) {
  var count = 0;
  var maxSelected = 3;
  this.noneCheckbox.checked = false;
  for (var i = 0, len = this.allCheckBoxes.length; i < len; i++) {
    if (this.allCheckBoxes[i].checked && !(this.allCheckBoxes[i] == selectedCheckbox)) {
      count++;
    }
  }
  if (count >= maxSelected) {
    var selectedDays = new Array();
    selectedCheckbox.checked = false;
    for (var i = 0, len = this.allCheckBoxes.length; i < len; i++) {
      if (this.allCheckBoxes[i].checked) {
        selectedDays.push(this.allCheckBoxes[i].value);
      }
    }
    alert("Only 3 days can be selected. You have already selected " + selectedDays[0] + "," + selectedDays[1] + " and " + selectedDays[2]);
  }
}
checkBox.prototype.selectNone = function() {
  for (var i = 0, len = this.allCheckBoxes.length; i < len; i++) {
    this.allCheckBoxes[i].checked = false;
  }
}
var dayNames = new checkBox("days");