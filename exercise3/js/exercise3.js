var maxCheckSelection = 3;

var checkSelection = function () {
  this.init();
}

checkSelection.prototype = {
  init: function () {
    this.checkBoxes = document.getElementsByClassName("days");
    this.len = this.checkBoxes.length;
    this.noneCheck = document.getElementById("none");
    this.storedDay = new Array();

    this.checkMaxThreeDays();
    this.checkNone();
  },

  checkMaxThreeDays: function () {
    var obj = this;
    for(i=0; i<obj.len; i++) {
      this.checkBoxes[i].onclick = function () {
        if(this.checked) {
          obj.noneCheck.checked = false;
          obj.storedDay.push(this.value);
        }
        else if(!this.checked) {
          obj.storedDay.splice(obj.storedDay.indexOf(this.value), 1);
        }

        if(obj.storedDay.length > maxCheckSelection) {
          obj.storedDay.pop();
          this.checked = false;
          alert("you can't selected more than 3 days. you have already selected " + obj.storedDay[0] + "," + obj.storedDay[1] + " and " + obj.storedDay[2]);
        }
      }
    }
  },

  checkNone: function () {
    var obj = this;
    obj.noneCheck.onclick = function () {
      if(obj.noneCheck.checked) {
        for(i=0; i<obj.len; i++) {
          obj.checkBoxes[i].checked = false;
          obj.storedDay.splice(0, obj.storedDay.length);
        }
      }
    }
  }
}

window.onload = function () {
  var selectionResult = new checkSelection();
}