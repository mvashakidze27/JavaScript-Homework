function sayHello(){
    console.log('hello');
}
genericFunction(sayHello);

// result:
'hello';
-------------------------------
function addOne(){
    const a = 2;
    a++;
    console.log(a)
}
genericFunction(addOne);

// result:
Assignment to constant variable
