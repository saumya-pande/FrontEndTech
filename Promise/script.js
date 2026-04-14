// !-- PROMISE 
// !- PROMISE IS AN OBJECT -> REPRESENTS EVENTUAL COMPLETION OF FAILURE OF AN ASYNC TASK

// !-- THREE STATES 
// !-- PENDING, FULFILLED, REJECTED

// ^ resolve, rejected -> if rejected triggered -> uncaught error => handle it 

let myPromise = new Promise((res, rej)=>{
    let pizzaReady = false;
    if(pizzaReady){
        res("pizza is ready")
    }
    else{
        rej("pizza is not ready")
    }
});

console.log(myPromise);

myPromise
    .then((t)=>{
        console.log(t);
    })
    .catch(c=>console.log(c))
    .finally(()=>console.log("I am finally"));

// !--

