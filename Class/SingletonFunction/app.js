var main = new function() {
  this.setSpan = function(name) {
    var greetingSpan = document.querySelector("h4");
    greetingSpan.textContent = this.greet(name);
  };

  this.greet = function(name) {
    return greeting.sayHello(name);
  };
}();

const button = document.querySelector("button");
button.addEventListener("click", event => {
  var nameInput = document.querySelector("input");
  main.setSpan(nameInput.value);
});
