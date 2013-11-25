function nameOfDays (Id) {
  this.allSelectDaysName = new Array();
  this.Id = document.getElementById(Id);
}
nameOfDays.prototype.checkLimit = function (target) {
  var none = document.getElementById("none");
  var maxChecked = 3;
  if (target.checked == true && target != none) {
    this.allSelectDaysName.push(target.value);
    none.checked = false;
  }
  else {
    var index = this.allSelectDaysName.indexOf(target.value);
    this.allSelectDaysName.splice(index,1);
  }
  if (this.allSelectDaysName.length == (maxChecked + 1)) {
    target.checked = false;
    this.allSelectDaysName.pop();
    alert("Only 3 days can be selected. You have already selected " + this.allSelectDaysName.slice(0,-1) + " and " + this.allSelectDaysName.slice(-1));
  }
}
nameOfDays.prototype.removeChecked = function () {
  var selected = document.querySelectorAll("#dayTable input[type='checkbox']:checked");
  for ( var i = 0; i < selected.length; i++) {
    selected[i].checked = false;
  }
  none.checked = true;
  this.allSelectDaysName = [];
}
var Days = new nameOfDays("dayTable");