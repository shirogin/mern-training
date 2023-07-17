var x = 100;
var $x = 6;
var y = 4.7;
var message = "Youcef is here teaching JS"; // this is for one line strings
var message2 = "Youcef is here teaching JS"; // this is the same
var message3 = `Youcef is here teaching 
vdcvzcv
JS`; // this is for multiple line strings and formated strings
console.log(message); // this function is used to print the message in the console
console.log(message2);
console.log(message3); // like printf
var _name;
var amIRight = true;
console.log(amIRight);

var firstTime;
console.log(firstTime);
$x = null;

console.log($x);
var user = "Youcef";
user = null; // we use it to distinguish if the the variable has been emptyed

const trainer = "Youcef";

var text = trainer + " is currently teaching";
// trainer = "Someone else"; // this is an error
text = `${trainer} is currently teaching`;
console.log(text);

console.log(`the x variable is ` + x);

console.log(`x >= $x ${x >= $x}`); // printf("%d %s", x,text)

console.log(x >= $x);

var five = 5,
    anotherFive = "5";
console.log(five === anotherFive, "===");
console.log(five == anotherFive, "==");

console.log(amIRight, "amIRight");
console.log(!amIRight, "!amIRight");

var a = true,
    b = false;
console.log(a && b, "a && b");
console.log(a || b, "a || b");

//--Conditions---------------------------------------------------

if (a && b) {
    console.log("both of them are correct");
} else if (a || b) {
    console.log("one of them is correct");
} else {
    console.log("both of them are wrong");
}

switch (x) {
    case 5: // using constant values
        console.log("it's perfect");
        break;
    case y: // using variable
        console.log("This was too specific");
        break;
    default:
        console.log("it wasn't perfect");
        break;
}

var max = x > y ? x : y;

if (x > y) {
    max = 5;
} else {
    max = y;
}

// ---Loops---------------------------
while (x > 0) {
    console.log(x);
    x--;
}
console.log("object");
do {
    console.log(y);
    y--;
} while (y > 0);
// console.log(y, Math.round(y * 10) / 10);

for (var i = 0; i <= 10; i++) {
    console.log(`i === ${i}`);
}
