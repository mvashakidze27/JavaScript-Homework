function mix(...fns) {
  if (!fns.every((fn) => typeof fn === "function"))
    throw new TypeError("The parameter is not a function");
  if (fns.length === 0) throw new Error("Arguments should be included");

  let value;
  const error = [];
  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i];
    try {
      value = fn(value);
    } catch (ex) {
      const err = {
        name: ex.name,
        massage: ex.message,
        stack: ex.stack,
        level: i,
      };
      error.push(err);
    }
  }
  return { error, value };
}

const result = mix(
  () => {
    return 0;
  },
  (prev) => {
    return prev + 1;
  },
  (prev) => {
    throw new RangeError("Range is wrong");
  },
  (prev) => {
    return prev * 3;
  }
);

console.log(result);
