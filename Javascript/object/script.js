// !-- OBJECT
let person ={ 
    name: 'Ranni',
    city: "Liurnia",
    age: 40,
    isMarried: false,
    skills: ['lunar', 'magic'],
    greet: ()=>{
        console.log("Hark tarnished!");
    }
}

// console.log(person);
// console.log(person.name);
// console.log(person['city']);
// person.greet();

// * modification 
// person.city='Caelid';

// * adding extra things 
// person.degree = "Witchcraft"
// console.log(person);

// * deletion
// delete(person.age);
// console.log(person);

// *to make the thing immutable to anything but update
// !-- SEAL() METHOD we can modify the existing properties, not add new ones tho, cant delete either. ONLY UPDATE ALLOWED 
// Object.seal(person);
// person.city='Farum Azula';
// person.country="LandsBetween"
// delete(person.name);
// console.log(person);

// console.log(Object.isSealed(person));

// *to make them more immutable
// !- FREEZE METHOD 
// Object.freeze(person);
// person.name = "Nox"; // ^ wont have any effect
// person.country = "Lands Between";
// delete(person.city);    
// console.log(person);

// !-- TO CHECK IF OBJECT IS FROZEN 
// let isfrozen = Object.isFrozen(person);
// console.log(isfrozen);

// !--to get the keys 
let keys = Object.keys(person);
console.log(keys);

// !- values
let values = Object.values(person);
console.log(values);

// !- LET ENTRIES  
let entries = Object.entries(person);
console.log(entries);

