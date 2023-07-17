var user1 = 32543643;
var user2 = 3254364343;
var user3 = 32543643543543;

var listOfUser = ["Youcef", "Khalil", "Fatima", "Chahinez", "Hichem", "Hadil", "Nassila", "Nassira", "Rayan", "Roufia"];
/* 
console.log(listOfUser[2]);
listOfUser[100] = "Someone weird";
console.log(listOfUser);
delete listOfUser[100];
console.log(listOfUser);

console.log("test empty cases : ", listOfUser[100]);
 */

for (var user of listOfUser) {
    if (user != null) console.log(`${user} is saying hi`);
}
/* 
for (var i = 0; i < listOfUser.length; i++) {
    if (listOfUser[i] != null) console.log(`${listOfUser[i]} is saying hi`);
} */

var filteredUsers = [];

for (var user of listOfUser) {
    // the first letter must be inferior to M
    if (user[0] < "M") {
        // add an element to the list "filteredUsers"
        filteredUsers.push(user);
    }
}

console.log(filteredUsers);
