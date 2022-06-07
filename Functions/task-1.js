const arr = [1,2];
console.log(arr); // [1,2]
arr.push(5);
console.log(arr) // [1,2,5];

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors("Content"); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
