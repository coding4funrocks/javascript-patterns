// A Greeting class using a singleton function
var greeting = new function() {
  this.language = "en";
  this.region = "us";

  this.sayHello = function(name) {
    return "Hello " + name;
  };

  this.sayGoodBye = function(name) {
    return "Good bye " + name;
  };
}();
