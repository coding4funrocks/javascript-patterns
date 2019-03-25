// A Greeting class using closure
var greeting = (function() {
  // Private variables
  var language, region;

  // Private methods
  sayGoodBye = function(name) {
    return "Good bye " + name;
  };

  return {
    // Public variables and methods
    name: undefined,

    sayHello: function() {
      return "Hello " + this.name;
    }
  };
})();
