function changeItem(source, destination)
{
  var targetSource = document.getElementById(source);
  var destinationSource = document.getElementById(destination);
  while (targetSource.selectedIndex != -1) {
    destinationSource.add(targetSource.options[targetSource.selectedIndex]);
  }
}