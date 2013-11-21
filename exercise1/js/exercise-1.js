function user (name, age) {
  this.name = name;
  this.age = age;
}

user.prototype.compare = function (user2) {
  if (this.age > user2.age) {
    document.write(user1.name + " is older than " + user2.name);
  }
  else if (this.age < user2.age) {
    document.write(user2.name + " is older than " + user1.name);
  }
  else {
    document.write(user1.name + " is with similar age as " + user2.name);
  }
}

var user1 = new user("John", 32);
var user2 = new user("Marry", 32);

user1.compare(user2);