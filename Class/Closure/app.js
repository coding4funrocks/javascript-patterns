var main = (function() {
  // Private method
  greet = function(name) {
    greeting.name = name;
    return greeting.sayHello();
  };

  return {
    // Public method
    setSpan: function(name) {
      var greetingSpan = document.querySelector("h4");
      greetingSpan.textContent = greet(name);
    }
  };
})();

const button = document.querySelector("button");
button.addEventListener("click", event => {
  var nameInput = document.querySelector("input");
  main.setSpan(nameInput.value);
});
