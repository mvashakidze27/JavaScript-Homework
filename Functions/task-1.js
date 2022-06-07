function getDivisors(num) {
  if (typeof num !== "number") {
    throw new Error("Error: parameter type is not a Number");
  }
  if (num <= 0) {
    throw new Error("Error: parameter can't be a " + num);
  }
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

try {
  console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
  getDivisors("Content"); // Error: parameter type is not a Number
  getDivisors(0); // Error: parameter can't be a 0
} catch (err) {
  console.log(err.message);
}
