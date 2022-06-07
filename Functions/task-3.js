function genericFunction(func) {
  try {
    func();
  } catch (Err) {
    console.log(err.message);
  }
}

function sayHello() {
  console.log("hello");
}
genericFunction(sayHello);
