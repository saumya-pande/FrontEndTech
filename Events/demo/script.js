function greet(){
    alert("hello")
}

function submit(){

}

// !-- PREVENT DEFAULT

let form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    confirm("Are you sure  ??? 👁️")
})