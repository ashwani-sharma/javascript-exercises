var dynamicTable = function (addRowBtn, table) {
  this.addRowBtn = addRowBtn
  this.table = table
}

dynamicTable.prototype = {
  init: function () {
    this.addListenerAppendRow();
  },

  createBtn: function (val, visible) {
    btn = document.createElement("input");
    btn.type = "button";
    btn.value = val;
    btn.className = val.toLowerCase();
    btn.style.display = visible ? 'inline' : "none";
    return btn;
  },

  createCells: function () {
    var obj = this;
    var name = obj.createCell(),
        email = obj.createCell(),
        action = obj.createCell('action');
    return [name, email, action];
  },

  createCell: function (cellType) {
    var obj = this;
    var cell = document.createElement("td");
    if (cellType == 'action') {
      btns = [
                obj.createBtn('Save', true),
                obj.createBtn('Edit', false),
                obj.createBtn('Delete', false)
              ];
      obj.appeadChildrenTo(cell, btns);    
    }
    else {
      var input = document.createElement("input"),
          label = document.createElement("span");
      input.type = "text";      
      obj.appeadChildrenTo(cell, [input, label]);
    }
    return cell;
  },

  addListenerSaveAction: function () {
    var obj = this,
        row = obj.table.rows[obj.table.rows.length - 1],
        save = row.getElementsByClassName("save")[0],
        edit = row.getElementsByClassName("edit")[0],
        del = row.getElementsByClassName("delete")[0];

    save.addEventListener("click", function () {
      var nameInputField = row.getElementsByTagName("input")[0],
          emailInputField = row.getElementsByTagName("input")[1],
          nameSpanField = row.getElementsByTagName("span")[0],
          emailSpanField = row.getElementsByTagName("span")[1],

          nameValue = nameInputField.value,
          emailValue = emailInputField.value;

      if (nameInputField.value == "" || emailInputField.value == "") {
        alert("Fields should not empty");
        return false;
      }
      else {
        nameInputField.style.display = "none";
        emailInputField.style.display = "none";

        nameSpanField.style.display = "block";
        emailSpanField.style.display = "block";

        nameSpanField.innerHTML = nameValue;
        emailSpanField.innerHTML = emailValue;

        this.style.display = "none";
        edit.style.display = "inline";
        del.style.display = "inline"; 
      }
    });
  },

  addListenerEditAction: function () {
    var obj = this,
        row = obj.table.rows[obj.table.rows.length - 1],
        save = row.getElementsByClassName("save")[0],
        edit = row.getElementsByClassName("edit")[0],
        del = row.getElementsByClassName("delete")[0];

    edit.addEventListener("click", function () {
      var nameInputField = row.getElementsByTagName("input")[0],
          emailInputField = row.getElementsByTagName("input")[1],
          nameSpanField = row.getElementsByTagName("span")[0],
          emailSpanField = row.getElementsByTagName("span")[1],

          nameValue = nameInputField.value,
          emailValue = emailInputField.value;

      nameInputField.style.display = "block";
      emailInputField.style.display = "block";

      nameSpanField.style.display = "none";
      emailSpanField.style.display = "none";

      this.style.display = "none";
      save.style.display = "inline";
      del.style.display = "none";
    });
  },

  addListenerDeleteAction: function () {
    var obj = this,
        row = obj.table.rows[obj.table.rows.length - 1],
        del = row.getElementsByClassName("delete")[0];

    del.addEventListener("click", function () {
      row.remove();
    });
  },

  createRow: function () {
    var obj = this,
        rowCount = obj.table.rows.length,
        row = obj.table.insertRow(rowCount++),
        cells = obj.createCells();
    obj.appeadChildrenTo(row, cells);
    obj.attachActionBtnListeners();
  },

  appeadChildrenTo: function(row, cells) {
    cells.forEach(function(v, i) {
      row.appendChild(v);
    })
  },

  attachActionBtnListeners: function () {
    var obj = this;
    obj.addListenerSaveAction();
    obj.addListenerEditAction();
    obj.addListenerDeleteAction();
  },

  addListenerAppendRow: function () {
    var obj = this,
        rowCount = obj.table.rows.length;
    obj.addRowBtn.addEventListener("click", function () {
      obj.createRow();
    });
  }
}

window.onload = function () {
  addRowBtn = document.getElementById("add-row");
  table = document.getElementById("data-grid");
  var results = new dynamicTable(addRowBtn, table);
  results.init();
}