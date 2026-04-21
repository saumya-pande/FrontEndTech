// !-- String properties

// let username = 'Vikas';
// console.log(username);

// !-- length property
// console.log(username.length);

// !-- toUpperCase()
// console.log(username.toUpperCase());

// !-- toLowerCase()
// console.log(username.toLowerCase());

// !-- replace()
// let locatio="punjab";

// let replace=locatio.replace('p','q');
// console.log(replace);

// !-- replaceAll()

// let locatio = "india"

// let replaceAll=locatio.replaceAll('i','s');
// console.log(replaceAll);

// !-- trimming  

// let info = '  i am from LPU ';
// console.log(info.length);

// let removedinfo = info.trimEnd();
// console.log(removedinfo);
// console.log(removedinfo.length);
// let removedinfofromstart = info.trimStart();
// console.log(removedinfofromstart);
// console.log(removedinfofromstart.length)
// let removedboth = info.trim();
// console.log(removedboth);
// console.log(removedboth.length);

//  !-- Substring 

// let info="I am from Punjab, India";
// console.log(info.substring(6,7));
// let part2 = info.substring(-2); //!-- cant pass negative value in substring, returns whole string 
// console.log(part2);

// !-- slicing, i.e., substring but with support for negative numbers

// let part1 = info.slice(2,5); //!- can also pass one value works like substring single value param 
// console.log(part1);

// let part3 = info.slice(-5, -2); // !-- cannot use two negative values no output 
// console.log(part3); // !-- can pass negative value in slice 

// !-- split need to be in double qoutes, SINGLE QOUTES WOUDNT WORK 

// let info="I am, a student, from Punjab_India";
// let res = info.split(" ");
// console.log(res);

// !-- concat

// let firstName = "Samnoch";
// let lastName = "Aldtrich"
// let fullName = firstName.concat(" " + lastName);
// console.log(fullName);
