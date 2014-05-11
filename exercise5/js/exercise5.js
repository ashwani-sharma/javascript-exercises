var listMenuItem = function(parentCheck) {
  this.init(parentCheck);
};

listMenuItem.prototype = {
  init: function(parentCheck) {
    this.childCheckBoxes = parentCheck.parentNode.getElementsByClassName("checkChildren");
    this.childBlock = parentCheck.parentNode.getElementsByTagName("ul")[0];
    this.childrenBlock(parentCheck);
  },

  childrenBlock: function(parentCheck) {
    var obj = this;
    parentCheck.onclick = function() {
      obj.childBlock.style.display = this.checked ?  "block" : "none";
      this.scrollIntoView(true);
      obj.checkStates(obj.childCheckBoxes, this.checked);
    }
  },

  checkStates: function(checkBoxes, state) {
    for (var i = 0; i < checkBoxes.length; i++)
      checkBoxes[i].checked = state;
  }
}

window.onload = function() {
  var objectCollection = [];
  var checkOptions = document.getElementsByClassName("checkOptions");
  for (var i = 0; i < checkOptions.length; i++) {
    objectCollection.push(new listMenuItem(checkOptions[i]));
  }
}