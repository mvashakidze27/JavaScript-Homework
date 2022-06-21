class Validator {
  isEmail(str) {
    const emailRegex = /^[a-zA-Z][\w\.-]{1,200}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
    return emailRegex.test(str);
  }
  isDomain(str) {
    const domainRegex = /^[a-zA-Z]{1,200}\.[a-zA-Z]{2,}/;
    return domainRegex.test(str);
  }
  isDate(str) {
    const dateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d+$/;
    return dateRegex.test(str);
  }
  isPhone(str, region = "Ge") {
    const BelarusRegex = /^(\+375)\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;
    const GeorgiaRegex =
      /^(\+995)\s5\d{2}(\s\d{3}\s\d{3}$)|(-\d{3}-\d{3}$)|(-\d{2}-\d{2}-\d{2}$)|(\d{6}$)/;
    const UnitedStatesRegex =
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let result;
    region === "Ge"
      ? (result = GeorgiaRegex.test(str))
      : region === "Blr"
      ? (result = BelarusRegex.test(str))
      : region === "US"
      ? (result = UnitedStatesRegex.test(str))
      : (result = "other country (not US, Belarus, or Georgia)");
    return result;
  }
}

let validator = new Validator();

console.log(validator.isEmail("jshtml@mail.ru"));
console.log(validator.isDomain("jshtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+375 (29) 817-68-92", "Blr"));
console.log(validator.isPhone("+995 555 555 555", "Ge"));
console.log(validator.isPhone("+995 555-555-555"));
console.log(validator.isPhone("+995 555-55-55-55"));
console.log(validator.isPhone("+995 555555555"));
console.log(validator.isPhone("123-456-7890", "US"));
console.log(validator.isPhone("+447975777666", "UK"));
