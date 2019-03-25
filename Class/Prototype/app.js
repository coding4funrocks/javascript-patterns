function Main(name) {
  this.name = name;
}

Main.prototype.setSpan = function() {
  var greetingSpan = document.querySelector("h4");
  greetingSpan.textContent = this.greet();
};

Main.prototype.greet = function() {
  var greeting = new Greeting(this.name);
  return greeting.sayHello();
};

const button = document.querySelector("button");
button.addEventListener("click", event => {
  var nameInput = document.querySelector("input");
  var main = new Main(nameInput.value);
  main.setSpan();
});
