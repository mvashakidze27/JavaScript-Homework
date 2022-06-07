function f(arr = []) {
  if (typeof arr !== "array") {
    throw new Error("Error: parameter type should be an array");
  }
  if ((arr = [])) {
    throw new Error("Error: parameter can't be an empty");
  }
  if ((arr0object !== "number")) {
    throw new Error("Error: parameter type should be array of numbers");
  }
  for (let i = 1; i <= arr.length; i++) {
    console.log(arr[i]);
  }
 
}

try {
  console.log(f([1, 2, 3])); // 1 // 2 // 3
  f(1, 2, 3); // Error: parameter type should be an array
  f("Content"); // Error: parameter type should be an array
  f([]); // Error: parameter can't be an empty
  f(["🧛🏼", "👨🏽‍🔧", 5, "dogs"]); // Error: parameter type should be array of numbers
} catch (err) {
  console.log(err.message);
}
