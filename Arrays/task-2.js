function reverse(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Error: parameter should be an array");
  }
  if (arr.length === 0) {
    throw new Error("Error: an array can't be empty");
  }
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
try {
  const arr = [3, 2, 1];
  console.log(reverse(arr));
} catch (err) {
  console.log(err.message);
}
