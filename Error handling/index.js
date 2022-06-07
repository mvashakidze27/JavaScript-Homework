const value = 100;
const nearLimit = 90;
const limit = 100;

try {
  if (value > nearLimit) {
    throw new Error("warning: value is greater that nearLimit");
  }
} catch (err) {
    if (value > limit) {
        throw new Error ('value should not be greater than limit')
    }
  console.log(err.message);

}