function SayHiForMe(username) {
    return `${username} says hi to you`;
}

SayHiForMe("Youcef");

var listOfUser = ["Youcef", "Khalil", "Fatima", "Chahinez", "Hichem", "Hadil", "Nassila", "Nassira", "Rayan", "Roufia"];

for (const user of listOfUser) {
    console.log(SayHiForMe(user));
}

function max(x, y) {
    return x > y ? x : y;
}

function min(x, y) {
    return x < y ? x : y;
}

var a = 10,
    b = 30,
    c = -1;
var func;
if (c > 0) {
    func = max;
} else {
    func = min;
}

var print = console.log;

print(func(a, b));
/* 
// Normal  function 
function Abs(a) {
    if (a > 0) return a;
    else -a;
}

//  function as a variable
var Abs = function (a) {
    if (a > 0) return a;
    else -a;
};
 */
// Normal lambda function
var Abs = (a) => {
    if (a > 0) return a;
    return -a;
};
// lambda function in one line
var Pow = (x, y) => x ** y;

console.log(Abs(30));
console.log(Pow(4, 3));
