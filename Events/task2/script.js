let inp = document.querySelector('#item');
let form = document.getElementById('form');
let list = document.getElementById('list');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let li = document.createElement('li');

    li.innerHTML = `
        <span class="text">${inp.value}</span>
        <button class="delete" id='del'>Delete</button>
    `;

    list.appendChild(li);
    inp.value = "";
});

list.addEventListener('click', (e)=>{
    if(e.target.id === 'del'){
        e.target.parentElement.remove();
    }

    if(e.target.classList.contains('text')){
    e.target.style.textDecoration = 'line-through';
}
});

