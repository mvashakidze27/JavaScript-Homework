function f(arr = []) {
  if (!Array.isArray(arr)) {
    throw new Error("Error: parameter type should be an array");
  }
  if (arr.length === 0) {
    throw new Error("Error: parameter can't be an empty");
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("Error: parameter type should be array of numbers");
    }
    console.log(arr[i]);
  }
}

try {
  f([1, 2, 3]); // 1 // 2 // 3
  f(1, 2, 3); // Error: parameter type should be an array
  f("Content"); // Error: parameter type should be an array
  f([]); // Error: parameter can't be an empty
  f(["🧛🏼", "👨🏽‍🔧", 5, "dogs"]); // Error: parameter type should be array of numbers
} catch (err) {
  console.log(err.message);
}
