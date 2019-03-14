'use strict'

/*myName = "Alberto"; */
let myNumber ;
myNumber
let myString = `Rashad Hamilton`;
let myBoolean = true;
let myObject = null;
//let myUndefined = symbol;
let myName;

//String
let myFirstName = `Rashad`;
let myLastName = `Hamilton`;
let myFullName =`${myFirstName} ${myLastName}`;
let fullName = `${myFirstName} ${myLastName}`;
let fullName1 = `First Name: ${myFirstName} ${myLastName}`;



let valueA =10;
let valueB = "5";
let total = valueA * valueB;

/*(if (myName) {
    var myName = "Rashad";
} */



console.log(fullName); 
console.log(total);

const RED = Symbol();
const ORANGE = Symbol();

console.log('Value of RED is ' + RED.valueOf().toString());
console.log(RED === ORANGE);

var name = 'Alberto Boteroe';
console.log(`Hello, ${name}!`);

console.log('5 is equal to "5"?')
console.log( 5 == "5");

console.log('5 is equal to "5"?')
console.log( 5 === "5");


/* creating an object */

let obj1 = {};

obj1.firstName = `Alberto`;
obj1.fullName = fullName;

let obj2 = { firstName: "Erik", lastName: "Davis"};

obj2.fullName = function () {
    return this.firstName + ' '+ this.lastName;
}

console.log(obj2.fullName());

console.log(obj2);
console.log(JSON.stringify(obj2));

let myArray = [];
myArray.push("Alberto Botero");
myArray.push(47);

let myArray2= ['Boteo', 45];
console.log(myArray[0]);
console.log(['firstName']);
console.log(obj1.fullName);


let myBirthday = new Date(1980, 10, 25);
console.log(myBirthday.getDate);


