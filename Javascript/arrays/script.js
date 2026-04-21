// !-- arrays
// let subject = ["math", "geography", "biology", 89, 78, 67];
// console.log(subject);

// console.log(subject[5]);

// subject[4] = "hii";
// console.log(subject);

// !--property length

// console.log(subject.length);

// !-- methods

// let marks = [122, 367, 125, 89];
// console.log(marks);

// marks.push(122);
// console.log(marks);

// !-- push, pop 
// marks.pop();
// console.log(marks);

// !-- unshift - adds to start of array
// marks.unshift("hii");
// console.log(marks);

// !-- shift removes first element 
// marks.shift();
// console.log(marks);

// !-- slicing returns a reference does not modify the real array 
// let marks = [40, 50, 70, 80]
// let newMarks = marks.slice(1);

// console.log(newMarks);

// !-- splice 
// let marks = [12,4,23,76,57,46,90];
// console.log(marks);

// let final = marks.splice(5, 3);
// console.log(final);

// console.log(marks);

// * can add any amount of insertions 
// let secondfin = marks.splice(5,3, 100, 100, 100, 100, 100); 

// !-- concat shallow copy, does not mutate original arrays
// let students = ["nox", "ranni", "max", "garo"];
// let marks = [-1, 100, 34, 0]

// let alldata = students.concat(marks);
// console.log(alldata);

// !-- split CONVERTS TO ARRAY 
// !-- join CONVERTS TO STRING
// let username = 'sanat';
// let res = username.split(' ');
// console.log(res);

// let username2 = username.split(' ').reverse.join(' ');

// !-- map() ==== DOES NOT MODIFY THE ORIGINAL ARRAY 
// let marks = [40,50,60,70,20,90]
// marks.map((m)=>{
//     console.log(m);
// });

// !-- filter method == SHALLOW
// let marks = [40,50,60,70,20,90];
// let toppers = marks.filter((m)=>m>80)
// console.log(toppers);

// !-- reduce(accumulator, current value) == SHALLOW
// let marks = [40,50,60,70,80]
// let totalMarks = marks.reduce((acc, cur)=>{
//     return acc+cur;
// }, 0)
// console.log(totalMarks);

// ^ 
// let marks = [40,50,60,70,80]
// console.log(typeof marks);

// * array is array func 
// let res = Array.isArray(marks);
// console.log(res);

// let totalMarks = marks.reduce((acc, cur)=>{
//     return acc*cur;
// }, 1)
// console.log(totalMarks);

// !-- 