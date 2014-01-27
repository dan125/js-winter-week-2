//Part 1
function myAwesomeFunction () {

}

//Part 2
function politeGreeting () {
  console.log("How are you doing today?");
}

politeGreeting()

//Part 3
function newsHeadline () {
  console.log("No rain in Portland, that's strange.");
}

x = newsHeadline();

x;

//Part4
var myPet = function(pet_name) {
  console.log(pet_name + " is the best pet in the whole wide world!");
}

myPet("Whiskers");

//Part5
var greetings = function(name) {
  return "Sup " + name + ".";
}

console.log(greetings("Bro"));

//Part6
var devowel = function(str) {

var output = "";
var v;
 
 
for (var i = str.length - 1; i >= 0; i--) {
  v = str[i].toLowerCase();
  if (v !== 'a' && v !== 'e' && v !== 'i' && v !== 'o' && v !== 'u' && v !== 'y') {
    output += str[i]; 
    }
  }
  return output;
}

var sentence = "Will this function work?";

console.log(devowel(sentence));