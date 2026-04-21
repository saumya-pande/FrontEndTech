function greet(){
    alert("hello")
}

function submit(){

}

// !-- PREVENT DEFAULT

// let form = document.getElementById('form')
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     confirm("Are you sure  ??? 👁️")
// })

let form = document.getElementById('form')

let inp = document.getElementById('username')

let h2 = document.querySelector('#head')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log();
    // confirm('are you sure ? ? ?');    

    let res = inp.value;
    h2.innerText = `${res}`;

})

h2.addEventListener('click', (e)=>{
    h2.style.textDecoration = 'line-through'
})


inp.addEventListener('input', (e)=>{
    console.log(inp.value);
    
})