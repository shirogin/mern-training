function StartCalling() {
    setInterval(() => {
        console.log("Hi again....");
    }, 4000);
}
function StartGoodBye() {
    setInterval(() => {
        console.log("Good by again....");
    }, 3000);
}
const X = 10;
export default StartCalling;
export { StartGoodBye, X };
