Object.defineProperty(Object.prototype, "mergeDeepRight", {
  value: function (obj) {
    let arr = Object.getOwnPropertyNames(obj);
    for (let el of arr) {
      if (
        typeof obj[el] === "object" &&
        !Array.isArray(obj[el]) &&
        typeof this[el] === "object" &&
        !Array.isArray(this[el])
      ) {
        this[el].mergeDeepRight(obj[el]);
      } else if (Array.isArray(obj[el]) && Array.isArray(this[el])) {
        this[el] = this[el].concat(obj[el]);
      } else {
        this[el] = obj[el];
      }
    }
  },
});

const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

data.mergeDeepRight({
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
});

console.log(data);
console.log(data.contact.meta.tags);
