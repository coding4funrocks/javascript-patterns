// A Greeting class using a function
function Greeting(name) {
  this.name = name;
  this.language = "en";
  this.region = "us";

  this.sayHello = function() {
    return "Hello " + name;
  };

  this.sayGoodBye = function() {
    return "Good bye " + name;
  };
}
