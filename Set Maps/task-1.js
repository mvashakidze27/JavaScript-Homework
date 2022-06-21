class DB {
  constructor() {
    this.Userdatabase = new Map();
    this.counter = 0;
    this.validateUser = function (user) {
      if (!user) {
        throw new Error("The user is empty");
      }
      if (typeof user.name !== "string") {
        throw new Error("The user name should be a string");
      }
      if (typeof user.age !== "number") {
        throw new Error("The user age should be a number");
      }
      if (typeof user.country !== "string") {
        throw new Error("The user country should be a string");
      }
      if (typeof user.salary !== "number") {
        throw new Error("The user salary should be a number");
      }
    };
  }
  create(user) {
    this.validateUser(user);
    let id = this.counter.toString();
    this.Userdatabase.set(id, user);
    this.counter++;
    return id;
  }
  read(id) {
    if (typeof id !== "string")
      throw new Error("The parameter in the read method should be a string");
    if (!arguments.length)
      throw new Error("There should be an argument in read method");
    if (!this.Userdatabase.has(id)) return "null";
    return { id, ...this.Userdatabase.get(id) };
  }
  readAll() {
    if (arguments.length > 0)
      throw new Error("The readAll method shouldn't include a parameter");
    let arr = [];
    this.Userdatabase.forEach((value) => {
      arr.push({
        ...value,
      });
    });
    return arr;
  }
  update(id, user) {
    if (arguments.length !== 2)
      throw new Error("The update method should include 2 parameters");
    if (!this.Userdatabase.has(id))
      throw new Error("The non-existing id was passed");
    if (typeof id !== "string")
      throw new Error("The update method id should be a string");

    let updatedUser = { ...this.Userdatabase.get(id), ...user };
    this.validateUser(updatedUser);
    this.Userdatabase.set(id, updatedUser);
  }
  delete(id) {
    if (!this.Userdatabase.has(id))
      throw new Error("The non-existing id was passed");
    this.Userdatabase.delete(id);
  }
}

const db = new DB();
const person = {
  name: "Pitter", // required field with type string
  age: 21, // required field with type number
  country: "ge", // required field with type string
  salary: 500, // required field with type number
};
const person2 = {
  name: "Paul", // required field with type string
  age: 45, // required field with type number
  country: "uk", // required field with type string
  salary: 4000, // required field with type number
};
const person3 = {
  name: "Patrick", // required field with type string
  age: 65, // required field with type number
  country: "us", // required field with type string
  salary: 30000, // required field with type number
};

const id = db.create(person);
const id2 = db.create(person2);
const id3 = db.create(person3);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true

console.log(customer);
console.log(customers);
console.log(db);
