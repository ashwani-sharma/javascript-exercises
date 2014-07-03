var emp = [{"name":"Ashwani Sharma"}, {"name":"Luigi Damiano"}, {"name":"Zenith Coboro"}, {"name":"Zig Ziglar"}, {"name":"Steve Costner"}, {"name":"Bill Grazer"}, {"name":"Timothy Frazer"}, {"name":"Boris Becker"}, {"name":"Glenn Gladwich"}, {"name":"Jim Jackson"}, {"name":"Aaron Kabin"}, {"name":"Roy Goldwin"}, {"name":"Jason Goldberg"}, {"name":"Tim Ferris"}, {"name":"Buck Singham"}, {"name":"Malcom Gladwell"}, {"name":"Joy Rabura"}, {"name":"Vid Luther"}, {"name":"Tom Glicken"}, {"name":"Ray Baxter"}, {"name":"Ari Kama"}, {"name":"Kenichi Suzuki"}, {"name":"Rick Olson"}];

var AutoComplete = function(inputField, nameList) {
  this.inputField = inputField;
  this.searchResultsBox = nameList;
}

AutoComplete.prototype = {
  searchName: function() {
    this.searchResultsBox.innerHTML = "";
    var searchData = this.inputField.value.trim(),
        searchType = new RegExp(searchData, 'i'),
        searchResults = [];

    for(var i = 0; i < emp.length; i++) {
      if (!!searchType.test(emp[i]['name'])) {
        searchResults.push(emp[i]['name']);
      }
    }
  
    if(!!searchResults.length) {
      this.createList(searchResults)
    }
    else {
      this.noResults();
    }

    this.showList();
  },

  displayName: function() {
    var names = [];

    for(var i = 0; i < emp.length; i++) {
      names.push(emp[i].name);
    }

    this.createList(names);
    this.showList();
  },

  createList: function(nameList) {
    var list_item;

    for(var i = 0; i < nameList.length; i++) {
      list_item = this.createListItems(nameList[i]);
      this.searchResultsBox.appendChild(list_item);
    }
  },

  createListItems: function(val) {
    var this_object = this,
        li = document.createElement('li');

    li.setAttribute('class', 'inner-row');
    li.innerText = val;
    
    li.onmousedown = function() {
      this_object.inputField.value = this.innerHTML;
    }
    
    li.onmouseover = function() {
      this.className = this.className + ' selected';
    }

    li.onmouseout = function() {
      this.className = this.className.replace(/\bselected\b/,'');
    }

    return li;
  },

  showList: function() {
    this.searchResultsBox.style.display = 'block';
  },

  hideList: function() {
    this.searchResultsBox.style.display = 'none';
  },

  noResults: function() {
    this.searchResultsBox.innerText = "No results found";
  }
}

window.onload = function() {
  var searchBox = document.getElementById('user'),
      nameList = document.getElementById('list'),
      pattern = /^\s+$/;
      autoCompleteSearch = new AutoComplete(searchBox, nameList);
  
  searchBox.onkeyup = function() {
    if (searchBox.value.match(pattern)) {
      autoCompleteSearch.noResults();
    }
    else if (searchBox.value.trim().length != 0) {
      autoCompleteSearch.searchName();
    }
    else {
      nameList.innerHTML = "";
      autoCompleteSearch.displayName();
    }  
  }

  searchBox.onblur = function() {
    autoCompleteSearch.hideList();
  }
}