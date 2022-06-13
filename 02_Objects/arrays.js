// --------------- Arrays ---------------
let obj = new Object();

var array = new Array();
array[0] = 100;
array[1] = 200;
array[2] = 300;

//var array = new Array(3); // lenght: 3
var array = new Array(6.5, 2.2, 0, 100);

for (let i = 0; i < array.length; i++) {
    console.log(`Element[${i}]: ${array[i]}`);
}

var array = [3, -5, 123, 44, -1, 23, 123, 66]; // Lenght: 8

array[0] = 44;
console.log(array[0]); // 44

console.log("Before: " + array)
array[5] = 60;
console.log("After: " + array);

array[20] = 55;
console.log("Array: " + array);

console.log(`Array lenght: ${array.length}`);

for (let i = 0; i < array.length; i++) {
    console.log(`Element[${i}]: ${array[i]}`);
}

array.forEach((elem, ind) => {
    console.log(`Element[${ind}]: ${elem}`);
})

console.log("for in")
for (const key in array) {
    console.log(key);
}

console.log("for of")
for (const value of array) {
    console.log(value);
}

// -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-
array.push(777);
console.log("Array:", array);

array.pop();
console.log("Array:", array);

array.shift();
console.log("Array:", array);

array.unshift(555);
console.log("Array:", array);

console.log("Index of first 123:", array.indexOf(123));
console.log("Index of last 123:", array.lastIndexOf(123));

console.log("Found:", array.find((elem) => elem < 0));

array.sort();
console.log("Sorted by default:", array);

array.sort((a, b) => a - b);
console.log("Sorted with custom func:", array);