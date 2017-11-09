// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop("Garfield");
}

function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo");
}

function appendDriver(name) {
  var name = "Broom";
  return const drivers2 = [ ...drivers, name];
}
