var getSelects = function () {
  this.sourceSelect = document.getElementById("add");
  this.destinationSelect = document.getElementById("remove");
  this.addBtn = document.getElementById("add-val");
  this.removeBtn = document.getElementById("remove-val");
}

getSelects.prototype = {
  bindEvents: function () {
    this.addElements();
    this.removeElements();
  },

  addElements: function () {
    var that = this;
    this.addBtn.addEventListener('click', function(){
      while(that.sourceSelect.selectedIndex != -1) {
        that.destinationSelect.add(that.sourceSelect.options[that.sourceSelect.selectedIndex]);
      }
    }, true);
  },

  removeElements: function () {
    var that = this;
    this.removeBtn.addEventListener('click', function () {
      while(that.destinationSelect.selectedIndex != -1) {
        that.sourceSelect.add(that.destinationSelect.options[that.destinationSelect.selectedIndex]);
      }
    }, true);
  }
}

document.addEventListener('DOMContentLoaded', function(){
   var results = new getSelects();
   results.bindEvents();
 });