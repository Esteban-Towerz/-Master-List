// function say(something) {
// 	console.log(something);
// }

// say("Hello");

// function exec(func, arg) {
// 	func(arg);
// }

// exec(say, "Hello there...");

////////////////////////////////////////
////// Function Expression syntax //////
////////////////////////////////////////

window.setTimeout((something) => {
	console.log(something);
}, 3000, "Greetings everyone!");

////////////////////////////////////////
////// Example Object - prototype //////
////////////////////////////////////////

function Monster(rank) {
  this.rank = rank;
  this.health = 100;
}

Monster.prototype.takeHit = function() {
  this.health--;
}

////////////////////////////////////////
////// Example Object - prototype //////
////////////////////////////////////////

function Animal(breed, noise) {
    this.breed = breed;
    this.noise = noise;
}

 Animal.prototype.makeNoise = function() {
        console.log(this.noise + ", " + this.noise);
}

var chicken = new Animal("Old English Pheasant fowl", "Cluck");

chicken.makeNoise(); // Cluck, Cluck;
