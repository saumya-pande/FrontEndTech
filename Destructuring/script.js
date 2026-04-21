// !-- Array destructuring
// !-- extracting elements from array and storing inside variable 
// !-- We can give any variable name 

// let marks = [10, 20, 40, 60]
// console.log(marks[2]);
// let [a, b, c] = marks;
// console.log(c);

// ^ can skip values by leaving space betw commas
// let[x, , z] = marks;
// console.log(z);

// !-- OBJECT DESTRUCTURING - extracting the properties from an object and storing inside a variable
// !-- NAME OF VAR SHOULD BE SAME as the object property

// let person = {
//     name:  "Varre",
//     city: "Mogh Castle"

// }

// let {name, city} = person;
// console.log(name + "  " + city);

// * used during import export when multiple js files are setup

// !--  SPREAD AND REST PARAMETER (...) 
// ~ rest : packing the elements, spread : unpacking the elements
// ^ if the dots are to right of = its spread operator, if it is left side it is rest
// * for an array

// let week1 = [12,23,434]
// let week2 = [30, 40, 50]
// let combine = [...week1, ...week2]
// console.log(combine);

// !-- rest
// let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
// let [a, b, ...c] = marks;
// console.log(c);

// * for an object spread and rest (...)

// let person = {
//     name : "nox",
//     city: "Phg"
// }

// ^ spread
// let updatedPerson = {
//     ...person,
//     country : "india"
// }

// console.log(updatedPerson);

// ^rest
// let user = {
//     username : "chimp",
//     role: "ADMIN",
//     salary : 9999
// }

// let {username, ...extra} = user;
// console.log(extra);

// * for a function 
// ^ rest inside the declaration

// function add(a, b, ...c){
//     console.log(c);
    
// }
// add(10, 20, 30, 30, 40, 50);


// ^ spread inside the call

// function add(a,b, c, d, e, f){
//     console.log(a+b+c+d+e+f);
// }

// add(10, ...[20, 30, 40, 50, 60]);

