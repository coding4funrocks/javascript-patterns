// A Greeting class using a singleton literal
var greeting = {
  language: "en",
  region: "us",

  sayHello: function(name) {
    return "Hello " + name;
  },

  sayGoodBye: function(name) {
    return "Good bye " + name;
  }
};
