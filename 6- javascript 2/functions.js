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
