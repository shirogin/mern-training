var x = 8;
var person = {
    firstName: "Youcef",
    "last name": "Madadi",
    age: 25,
    distance: 0,
    x: 5,
    SayHi: function () {
        console.log(`${this.firstName} say hi ${x} ${this.x}`);
    },
};

person["firstName"] = "Jesuph";

person.role = "Teacher";

console.log(person);
console.log(person.firstName);

var user = {
    username: "Darkoo",
    password: "qwerty1234",
    auth: function (username, password) {
        if (username !== this.username) return "wrong username";
        if (password !== this.password) return "wrong password";
        return "Welcome back";
    },
};

console.log(user.auth("Jesuph", "qwert1909"));

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.SayHi = function () {
        console.log(`${this.firstName} say hi`);
    };
}

var people = [new Person("Youcef", "Madadi", 25), new Person("Fatima", "Benazzou", 23)];

people[0].firstName = "Jesuph";

class User {
    constructor(firstName, lastName, a) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = a;
    }
    SayHi() {
        console.log(`${this.firstName} say hi`);
    }
}

var user = new User("Youcef", "Madadi", 25);
console.log(user.firstName);
user.SayHi();
