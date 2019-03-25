function Main(name) {
  this.setSpan = function() {
    var greetingSpan = document.querySelector("h4");
    greetingSpan.textContent = this.greet();
  };

  this.greet = function() {
    var greeting = new Greeting(name);
    return greeting.sayHello();
  };
}

const button = document.querySelector("button");
button.addEventListener("click", event => {
  var nameInput = document.querySelector("input");
  var main = new Main(nameInput.value);
  main.setSpan();
});
