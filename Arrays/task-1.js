let arraySum = 0;
function f(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("parameter should be an array");
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arraySum += arr[i];
    } else if (Array.isArray(arr[i]) === true) {
      f(arr[i]);
    } else {
      throw new Error("parameter should be a number or an array");
    }
  }
  return arraySum;
}

try {
  const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
  // const arr2 = [[[[[1, 2]]]]];
  // const arr3 = [[[[[1, 2]]], 2], 1];
  // const arr4 = [[[[[]]]]];
  //  const arr5 = [[[[[], 3]]]];
  // const arr6 = ['hello', 'world']
  console.log(f(arr));
} catch (err) {
  console.log(err.message);
}
