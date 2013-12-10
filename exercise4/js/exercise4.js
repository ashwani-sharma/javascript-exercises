function addRow(){
  var getTable = document.getElementById("myTable");
  var rowCount = getTable.rows.length;
  var getRow = getTable.insertRow(rowCount);
  var cell1 = getRow.insertCell(0);
  
  var element1 = document.createElement("input");
  element1.type = "text";
  cell1.appendChild(element1);
  
  var cell2 = getRow.insertCell(1);
  var element2 = document.createElement("input");
  element2.type = "text";
  cell2.appendChild(element2);
  
  var cell3 = getRow.insertCell(2);
  cell3.innerHTML = '<input type="button" value="Edit" onclick="editData(this)" /> <input type="button" value="Delete" onclick="deleteRow(this)" />';
  cell3.setAttribute("style", "display:none;")
  
  var cell4 = getRow.insertCell(3);
  cell4.innerHTML = '<input type="button" value="Save" onclick="saveData(this)" />';
}

function deleteRow(){
  var rowCount = document.getElementById("myTable").rows.length;
  document.getElementById("myTable").deleteRow(rowCount-1);
  // x.parentNode.parentNode.parentNode.removeChild(x.parentNode.parentNode);
  //document.write(x +" "+ x.parentNode+" "+x.parentNode.parentNode);
}

function saveData(x){
  var getCell = x.parentNode.parentNode.getElementsByTagName("td");
  getCell[0].innerHTML = getCell[0].firstChild.value;
  getCell[1].innerHTML = getCell[1].firstChild.value;
  getCell[2].setAttribute("style", "display:block;");
  getCell[3].setAttribute("style", "display:none;");
}

function editData(x){
  var getCell = x.parentNode.parentNode.getElementsByTagName("td");
  getCell[0].innerHTML = '<input type="text" value="'+getCell[0].innerHTML+'" />';
  getCell[1].innerHTML = '<input type="text" value="'+getCell[1].innerHTML+'" />';
  getCell[2].setAttribute("style", "display:none;");
  getCell[3].setAttribute("style", "display:block;");
}