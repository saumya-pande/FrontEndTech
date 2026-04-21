// !--BOM -> BROSWER OBJECT MODEL 
// ^ similar to the window object - aka global object 

// console.log(window);

// * global scope stuff shows here
// var a = 10;
// var aa = 20;
// var aab = 30;
// console.log(a);

// !-- prompt to take user input 

// let data = prompt('Enter Username');
// console.log(data);
// console.log(typeof data);

// * if were taking number input we need to typecast it after taking input 
// * instead of using prompt directly we acan use window.prompt()
// * typecasting gives NAN when wrong datatype

// let data = window.prompt()
// let num = Number(data)
// console.log(typeof num);
// console.log(num);

// !-- window.alert()

// window.alert('are you sure ?');

// !-- window.confirm() also shows a cancel button 

// window.confirm('sure buddy ?')

// !-- DOM - document object model 
// !-- document. METHOD

// let h1 = document.getElementById("head1");
// console.log(h1);
// console.log(document.getElementById("head1")); 

//  let h1 = document.getElementById("head1");
//         console.log(h1);

// let c1 = document.getElementsByClassName("myclass");
// console.log(c1);

// let t1 = document.getElementsByTagName("p");
// console.log(t1);

// let n1 = document.getElementsByName("heading");
// console.log(n1);

// let para = document.querySelector('.para')
// console.log(para);

// let para = document.querySelectorAll('.para')
// console.log(para);

// !-- 
// let div = document.createElement('div');
// console.log(div);

// ^to craete a new tag and this will be parsed by the html 
// div.innerHTML = '<h2> hello </h2>';

// ^ inner text is considered as text so no parsing of html stuff. "prints <h2> . . . "
// div.innerText = '<h2> Meow </h2>'

// ^ to append div to the body of HTML
// document.body.append(div)

// let p = document.createElement("p");
// p.innerHTML = "<b> Hellowwww </b>"; 
// p.innerText = "hellow everynyan, how are you ?, fine , sankyou"
// document.body.append(p);

// !-- 
// let main = document.createElement("main");
// let section = document.createElement('section')
// let article = document.createElement('article')

// main.append(section)
// section.append(article);
// document.body.append(main);

// article.innerHTML = "<h1> article </h1>"

// ^ append will append all the elements passed
// main.append(section, article)

// ^ append child will only append the first one and ignore others DEPRECATED ???? CHECK ONCE 
// main.appendChild(section, article)

// !-- css manipulation

// let p = document.createElement('p')

// p.innerText = "Good Afternoon"
// document.body.append(p);

// p.style.color = 'yellow'
// p.style.backgroundColor = 'black'

// !-- CLASSLIST  (giving a div class attribute. internal css will get hiegher priority 

// let container = document.querySelector('#container')
// container.classList.add("dark")
// document.body.classList.add('dark')

// !-- .remove

// document.body.classList.remove("light");

// container.classList.remove('light')

// !--contains ()

// let btn = document.getElementById("btn")
// btn.addEventListener('click', ()=> {
    
// console.log(document.body.classList.contains('dark'));
//     document.body.classList.toggle("dark")
//     // if(btn.innerText == 'light')
//     //     btn.innerText = 'dark'
//     // else
//     //     btn.innerText = 'light'

//     // * or

//     document.body.classList.contains('dark')?btn.innerText='light' : btn.innerText='DARK'; 
// })

// !-- EVENTS - actions performed by the user in the browser 

