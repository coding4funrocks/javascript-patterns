// A Greeting class using a function
function Greeting(name) {
  this.name = name;
  this.language = "en";
  this.region = "us";
}

// Methods declared using ptototype are shared by all instances of the Greeting, rather than redefining it for every instance.
// Any data type that inherits from Greeting will have access to the methods.
Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};

Greeting.prototype.sayGoodBye = function() {
  return "Good bye " + this.name;
};
