const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter Your Full Name');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let username = 'Douglass';
let age = 200;
let present = false;

// object
const person = {
    username: 'Douglass',
    age: 200,
    present: false,
    child: {
        name: 'Adom',
        friend: {
            name: 'Paapa',
        }
    }
}



console.log(person.username);
console.log(age);

person.age = 150;
console.log(person)  
person.child.Adom = 'Adasa';







const date = new Date ();
date.getDay();


// if/else
const age = 202;
if (age == 18) {
  'You are true';
} else {
  'You are false'
} 

// For loop 
for (let i = 0; i<=5; i+=3) {
  console.log('We did it', i);
}
  



// Arrays
const bottle1 = {
  size: 'large',
  color: 'yellow'
}

const bottle2 = {
  size: 'small',
  color: 'blue'
}

// const cat1 = {
//   weight: '20kg',
//   breed:'tabby'
// }

const bottles = [bottle2, bottle1];
bottles;
bottles.push(bottle1);
bottles.push(bottle2)
// bottles;

bottles[3].size;


const date = new Date();
date.getDay();

const date = new Date ();
date.getDay();


// if/else
const age = 202;
if (age == 18) {
  'You are true';
} else {
  'You are false'
} 

// For loop 
for (let i = 0; i<=5; i+=3) {
  console.log('We did it', i);
}
  


const btn = document.getElementById('btn-btn') 
btn.onclick = function() { 
alert('more soon') 
} 
const vid = document.getElementById('vid-btn') 
vid.onclick = function() { 
alert('Video Coming Soon') 
}



// Arrays
const bottle1 = {
  size: 'large',
  color: 'yellow'
}

const bottle2 = {
  size: 'small',
  color: 'blue'
}

// const cat1 = {
//   weight: '20kg',
//   breed:'tabby'
// }

const bottles = [bottle2, bottle1];
bottles;
bottles.push(bottle1);
bottles.push(bottle2)
// bottles;

bottles[3].size;


const date = new Date();
date.getDay();



