function changeItem(valueFrom, valueTo) {
  var itemFrom = document.form1.elements[valueFrom];
  var itemTo   = document.form1.elements[valueTo];

  var changeValue = 0;
  for (var i = 0; i < itemFrom.options.length; i++) {
    if (itemFrom.options[i].selected) {
      itemTo.options[itemTo.options.length] = new Option(itemFrom.options[i].text, itemFrom.options[i].value);
      changeValue++;
    }
    else if (changeValue){
      itemFrom.options[i - changeValue] = new Option(itemFrom.options[i].text, itemFrom.options[i].value);
    }
  }
  if (changeValue){
    itemFrom.options.length = itemFrom.options.length - changeValue;
  }
  else{
    alert("You haven't selected any options");
  }
}