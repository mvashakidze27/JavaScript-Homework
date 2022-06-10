function rotate(arr, num, direction = "right") {
  if (!Array.isArray(arr)) {
    throw new Error("Error: parameter should be an array");
  }
  if (typeof num !== "number") {
    throw new Error("Error: parameter type shoulb be a Number");
  }
  if (typeof direction !== "string") {
    throw new Error("Error: parameter type shoulb be a string");
  }
  for (let i = 0; i < num; i++) {
    if (direction === "right") {
      arr.unshift(arr.pop());
    } else if (direction === "left") {
      arr.push(arr.shift());
    }
  }
  return arr;
}
try {
  const arr = [1, 2, 3];
  // rotate(arr, 1, "left"); // result: [2,3,1]
  //   rotate(arr, 1); // result: [3,1,2]
  //   rotate(arr, 2); // result: [2,3,1]
  console.log(rotate(arr, 1, "left"));
} catch (err) {
  console.log(err.message);
}
