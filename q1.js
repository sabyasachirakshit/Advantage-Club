let arr = [];
let lor = window.prompt("How many elements?")
while (lor > 0) {
    let x = window.prompt("Enter element");
    arr.push(x);
    lor--;
}
let even = arr.filter(function (x) { return x % 2 == 0 })
console.log(even);