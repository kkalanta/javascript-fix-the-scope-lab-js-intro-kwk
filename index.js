var animal = 'dog';

function myAnimal() {
  var animal = 'dog';
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2;
  return n + two;

  // Feel free to move things around!
}

function funkyFunction() {
  var theFunk = "FUNKY!";
  return function theFunk() {
    }
  return funkyFunction();
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()


