var heat_degrees = [44, 39, 38, 40, 38];
var old_heat_degrees = [40, 39, 34, 42, 34];
/*  // old way of spreading an array

var all_degrees = [];

for (const heat of old_heat_degrees) {
    all_degrees.push(heat);
} 
for (const heat of heat_degrees) {
    all_degrees.push(heat);
}
*/

var all_degrees = [...old_heat_degrees, ...heat_degrees];

//----------------------------------
function max(...a) {
    var m = -Infinity;
    // var [m = -Infinity] = a;
    for (const elm of a) {
        if (elm > m) m = elm;
    }
    return m;
}

//console.log("🚀 ~ file: advanced.js:26 ~ max(10, 30):", max(10, 30));

//console.log("🚀 ~ file: advanced.js:28 ~ max(3, 5, 9, 10):", max(3, 5, 9, 10));
//----------------------Extending object----

const person = { firstName: "Youcef", lastName: "Madadi", age: 25, role: "Student" };

console.log("🚀 ~ person:", person);

var exams = [12, 8, 15, 17, 4],
    { role: rl = "teacher", firstName, ...restPerson } = person;

var person2 = { ...person, firstName: "Abdelhak", age: 23, exams };

console.log("🚀 ~ file: advanced.js:38 ~ person2:", person2);

var people = ["Youcef", "Khalil", "Fatima", "Chahinez", "Hichem", "Hadil", "Nassila", "Nassira", "Rayan", "Roufia"];
/* old way
var person1 = people[0];
var person2 = people[1];
var person3 = people[2]; */

var [p1, x, y, z, p2, p3, ...restPeople] = people;
restPeople = [...restPeople, x, y, z];
console.log("🚀 ~ file: advanced.js:49 ~ p1, p2, p3:", p1, p2, p3, restPeople);

var a = 40,
    b = 20;
console.log("🚀  ~ a:", a);
console.log("🚀  ~ b:", b);
/* old way 
var tmp = a;
a = b;
b = tmp; */
[a, b] = [b, a];
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
//----------------------

var [py = "Said", , , , , , , , , , , , px = "Samir"] = people;
console.log(py, px);

console.log(rl, restPerson);

//--------------------- Unpacking

function createDialoge({ firstName, lastName }) {
    console.log(`${firstName} ${lastName} saying : dsgdsgvdsvgbdsg`);
}
createDialoge(person);
// --------------- callback---------
function SpecialSum(arr, func) {
    var result = 0;
    for (const elm of arr) {
        result += func(elm);
    }
    return result;
}
function TimeTwo(a) {
    return a * 2;
}
function byTwo(a) {
    return a / 2;
}

console.log(SpecialSum(heat_degrees, TimeTwo));
console.log(SpecialSum(heat_degrees, byTwo));
console.log(SpecialSum(heat_degrees, (elm) => (elm * 4) / 3));

console.log(
    heat_degrees.map((elm, i, list) => {
        return elm ** 2;
    })
);

console.log(
    heat_degrees.reduce((acc, elm, i, list) => {
        if (i % 2 === 0) return acc * elm;
        return acc + elm;
    }, 1)
);

console.log(
    all_degrees.filter((elm, i, list) => {
        return elm % 2 === 1;
        /* return elm <= 40; */
    })
);

console.log(
    all_degrees.sort((a, b) => {
        return a - b;
    })
);
all_degrees[all_degrees.length] = 55;
