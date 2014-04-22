var tableData = function() {
  this.init();
}

var tableColumns = 3;

tableData.prototype = {
  init: function() {
    this.table = document.getElementById("dynamicData");
    this.bindClickEvent();
  },

  bindClickEvent: function() {
    var obj = this;
    this.addBtn = document.getElementById("addNewRow");
    this.addBtn.onclick = function() {
      obj.addNewRow();
    }
  },

  addNewRow: function() {
    var row = this.table.rows.length,
        column0,
        column1,
        column2,
    
    column0 = this.createInputs(column0);
    column1 = this.createInputs(column1);
    column2 = this.createInputs(column2);
    column2.type = "button";
    column2.value = "save";
    column2.onclick = this.saveRow;
    
    this.table.insertRow(row);
    for (i = 0; i < 3; i++) { 
      this.table.rows[row].insertCell(i); 
    }

    this.table.rows[row].cells[0].appendChild(column0);
    this.table.rows[row].cells[1].appendChild(column1);
    this.table.rows[row].cells[2].appendChild(column2);
  },

  editCurrentRow: function() {
    var row = this.parentNode.parentNode, 
        column0,
        column1,
        column2;

    column0 = table.createInputs(column0);
    column0.value = row.cells[0].firstChild.nodeValue;
    
    column1 = table.createInputs(column1);
    column1.value = row.cells[1].firstChild.nodeValue;
    
    column2 = table.createInputs(column2);
    column2.type = "button";
    column2.value = "save";
    column2.onclick = table.saveRow;
    
    for (i = tableColumns-1; i >= 0; i--) {
      row.deleteCell(i); 
    }
    
    for (i = 0; i <= tableColumns-1; i++) { 
      row.insertCell(i);
    }
    
    row.cells[0].appendChild(column0);
    row.cells[1].appendChild(column1);
    row.cells[2].appendChild(column2);
  },

  actions: function(element) {
    element = document.createElement("a");
    element.href = "#";
    return element;
  },

  saveRow: function() {
    var row = this.parentNode.parentNode,
        name = row.cells[0].getElementsByTagName("input")[0].value,
        email = row.cells[1].getElementsByTagName("input")[0].value,
        edit = table.actions(edit),
        del = table.actions(del);
    
    edit.appendChild(document.createTextNode("Edit"));
    del.appendChild(document.createTextNode("Delete"));
    edit.onclick = table.editCurrentRow;
    del.onclick  = table.deleteRow;
    
    for (i = tableColumns-1; i >= 0; i--) { 
      row.deleteCell(i); 
    }
    
    for (i = 0; i <= tableColumns-1; i++) { 
      row.insertCell(i); 
    }

    inputNameValue = document.createTextNode(name);
    row.cells[0].appendChild(inputNameValue);
    inputEmailValue = document.createTextNode(email);
    row.cells[1].appendChild(inputEmailValue);
    
    row.cells[2].appendChild(edit);
    row.cells[2].appendChild(document.createTextNode(" / "));
    row.cells[2].appendChild(del);
  },

  deleteRow: function() {
    var row = this.parentNode.parentNode;
    document.getElementById("dynamicData").deleteRow(row.rowIndex);
  },

  createInputs: function(element) {
    element = document.createElement("input");
    element.type = "text";
    return element;
  }
}

var table = new tableData();