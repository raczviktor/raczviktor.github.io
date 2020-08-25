let varOne = 10, varTwo = 20;

function changeValues(one, two) {
    one = 100;
    two = 200;
    console.log("From function: ", one, two);
}

changeValues(varOne, varTwo);
console.log(varOne, varTwo);

function callByRef(arr) {
    arr[1] = 200;
    console.log("From function: ", arr);
}

let fruits = ["Pear", "Avocado", "Apple"];
callByRef(fruits);
console.log(fruits);