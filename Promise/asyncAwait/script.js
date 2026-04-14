// !-- async & await(only used inside async func)

// async function getData(){
//     let resp = await fetch("https://fakestoreapi.com/products")
//     console.log(resp);

//     let data = await resp.json();
//     console.log(data);

//     console.log(data[2]);
//     console.log(data[2].category);
    
//     console.log(data[3]['title']);
    
    
    
    
// }

// getData()

// !-- JSOn

let person = {
    username : "Nox",
    age: 19,
    isMarried: false,
    skills: ['js', 'html', 'css'],
    greet: function(){
        console.log('hellow everyone');
        
    },
    address: {
        pin: 144411,
        country: "India"
    },
    kids: undefined,
    ex: null,
    // salary: 100000n

}

console.log(person);
let result = JSON.stringify(person);
console.log(result);

console.log(typeof result);

let final = JSON.parse(result);
console.log(final);

