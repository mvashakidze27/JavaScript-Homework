f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f("Content"); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty
f(["🧛🏼", "👨🏽‍🔧",5, "dogs"]); // Error: parameter type should be array of numbers
