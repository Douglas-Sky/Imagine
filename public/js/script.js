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


// write a function that will ad a participant to our google class

const participants = [];
function addParticipant(email) {
  
  // check if an email was provided
  if (email===undefined || email ===null) {
    return 'No email provided';
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided'
  }
  
  // check if email is mest
  if (!email.includes('@meltwater.com')) {
    return 'Check your email'
  }
  // add email to participant
  participants.push(email);
  return 'Particpant added';
}
addParticipant('yawowusuagyemang');
addParticipant('yawowusuagyemang@gmail.com');
addParticipant('owusuagyemang@meltwater.com')
addParticipant();
participants;



// Arrays in Js
const users = [
  {
  userName: 'Yaw Adasa',
  password: '1245', 
  email: 'yawadasa@gmail.com'
  },
    {
  userName: 'Owusu Agyemang',
  password: '1234563',
  email: 'owusuagyemang@gmail.com'
      
    }
];
users;




// // Write a function that will take a user with firstname, lastname and return
// function fullName (user)  { 

// return {
//   ...user,
//   fullName: `${user.firstname} ${user.lastname}`
// };
// }

// const user = {
//   firstname: 'Douglas',
//     lastname: 'Owusu Agyemang'
// }

// fullName(user);

// // array map
// const users = [
// { firstname: 'Douglas', lastname: 'OWusu Agyemang'},
// { firstname: 'Judith', lastname: 'Boamponsem'},
// {firstname: 'Alex', lastname: 'Boamponsem'},
// {firstname: 'Nana Osei', lastname: 'Boamponsem'}
// ]
// users.map (fullName)



// square of numbers

function squared(number) {
  return number**2;
}
squared(9)

const numbers = [3,5,8,9];
numbers.map(squared);


// write a function which takes a number, if the number is even number, it returns true, but it takes 


function isEven (number) { 
 if (number % 2 === 0) return true
 else return false
}
isEven(3);
numbers.filter(isEven);
