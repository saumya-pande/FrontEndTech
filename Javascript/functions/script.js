// !-- named function 

// function add(a=25, b=3){ // !-- can only set default for second value when passing any value? 
//     return a+b;
// }

// console.log(add(50,20));

// !-- anonymous funciton / unnamed function 

// (function (a, b){
//     console.log(a+b);
// } (12, 45))

// !-- IIFE immediate invoke function expression 

// (function (c, d){
//     console.log(c*d);
// }) (45, 10)

// !-- to use an anon func after a few loc, use function expression 

// let div = (function (c, d){
//     console.log(c/d);
// }) 

// div(40, 5)

// !-- callback and higher order function

// !-- higherOrder function : a function which accepts another function as a parameter
// !-- Callback Function : function which passed as argument to another function 

// function hof(name, clb){
//     console.log(name);
//     clb();
// }

// function callback(){
//     console.log("Callback function called");
// }

// hof("nox", callback);

// !-- Arrow function (introduced in ES 6) shorter way to create any function 
// !-- no need to use function keyword/ lambda ??? 
// !-- if arrow function accepting only one param, no need to write parenthesis ( ) and curly braces  
// !-- if arrow function no need to use { } 
// !-- in arrow func no need to use the return keyword either 
// !-- if using curly brackets use return keyword, implicit only works without the parenthesis


// var ans = (a, b)=>{
//     console.log(a*b);
// };

// ans(12, 12);

// ^ will get undefined here cause no return value and we cannot print nothing
// console.log(ans(10, 10));

// let mult = a=> console.log(a*12);
// mult(10);

// *explicit return 
// let mult = (a,b) => {return a*b;};
// console.log(mult(13, 10));

// *implicit return (ONLY AVAILable for arrow function)
// let mult = a=>a*12;
// console.log(mult(100));

// let mult = (a, b) => a*b;
// console.log(mult(40, 5));

// !-- nested function 

// function parent(name, city) {
//     console.log(name);
//     function child() {
//         console.log(city);
//     }
//     child();
// }

// parent("Ranni", "Liurnia");

// !-- CLOSURE LOGGING ?  closure is an object which tells variable when child accpets parents variable

// console.log("start");

// function parent(name, city) {
//     console.log(name);
//     function child() {
//         console.log(city);
//     }
//     child()
// }
// parent("Radhan", "Caelid");
// console.log("end");

// !-- FUNCTION CURRYING calling inner func  

// function outer(){
//     let name = "radagon";

//     return function inner(){
//         console.log(name);
//     }
// }


// outer()();

// ^ another example 

// function outer(a){
//     console.log(a);
//     let name = "Maliketh"
//     return function inner(b){
//         console.log(name);   
//         return function(c){
//             console.log("i am innermost func");
//             console.log(a + b +c);
//         }
//     }
// }

// outer(1)(5)(10);

// ! ARROW FUNCTION FUNCTION CURRYING 

mult = a=>b=>c=>a*b*c;
console.log(mult(10)(5)(6));
