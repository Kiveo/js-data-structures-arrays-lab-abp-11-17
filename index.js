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
  const drivers2 = [ ...drivers, name];
  return drivers2;
}

function prependDriver(name) {
  var name = "Arnold";
  const drivers3 = [name, ...drivers ];
  return drivers3;
}

function removeLastDriver() {
  return drivers.slice(0, 3);
}

function removeFirstDriver() {

}
