// console.log("grrrr");
// var a = 10;
// var b = 12;
// console.log(a +  b );

// // diff types of keywords for declaring variables in js
// //can be declared using var , initializded and reassign values to it
// var a=30;
// var a; //redeclaring the variable
// a = a + 10; //reassigning the value to the variable will use old value till reassigned
// console.log(a);
// a = a + 20;
// console.log(a);

// //let keyword
// //can be declared using let , initializded and reassign values to it
// let c = 40;
// c = c + 10;
// console.log(c);
// // let c=50; //redeclaring the variable will throw error
// console.log(c);

// //const keyword
// //can be declared using const , initializded but cannot reassign values to it
// const d = 50;
// // d = d + 10; //reassigning the value to the variable will throw error
// console.log(d);
// // const d = 60; //redeclaring the variable will throw error    


// // scope diff 
// // var is function scoped and global scoped     
// {
//     var b = "meow"
// }
// console.log(b); // will print "meow" as var is function scoped and global scoped
// function test(){
//     var x = "Hello i am inside function var x ";
//     console.log(x);
// }
// test();
// // console.log(x); // will throw error as x is not defined outside the function


// //let is block scoped
// {
//     let y = "Hello i am inside block let y";
//     console.log(y);
// }
// let e = 0; //script scope
// //console.log(y); // will throw error as let is block scoped


// let username = "john_doe";
// const college = 'LPU'
// let details = `My name is ${username} and 
// I am studying in ${college}`; //cant use "" & '' for template literals
// console.log(details);

// details = ' I am from "LPU" punjab' //reverse works too
// console.log(details)

// !--boolean

// let isMarried=true;
// console.log(isMarried);
// console.log(typeof isMarried);

// !--undefined null

// let a;
// // let a=undefined;
// console.log(typeof a);

// !-- null

// let b=null;
// console.log(b);
// console.log(typeof b);

// ! bigInt

// let salary=9999999999999999999999999999n;
// console.log(salary);
// console.log(typeof salary);

// !-- Array

// let arr=['vikas',18,true]
// console.log(arr);

// !-- Operators

// let a=10;
// let b='10';

// console.log(a==b); //loose comparsion, ie can compare string number and normal number 
// console.log(a===b); //checks if datatype is the same too 

