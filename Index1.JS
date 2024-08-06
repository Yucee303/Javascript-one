 //console.log('Hello');
//console.log(`i like pizza`);

//window.alert('This is an alert');
//window.alert('I Like Pizza');

document.getElementById("myH1").textContent=`welcome`;
document.getElementById("myP").textContent=`i like pizza`

//....................................................................................
//...................................................................................
/* [1] VARIABLES, DECLARATIONS AND ASSIGNMENT
 
 variable= A Container That Stores A Value, Behaves as if it were the value it contains.
   {there are two steps in declaring a variable, they are: (1) Declaration (2) Assignment }

 1) declaration    let x;
 2) assignment     x=100; 
 
 so declare a variable and assign it a value, i.e x=100
*/

/*let x;  let age =25; let price= 10.99; let gpa=2.1
x = 100; 

console.log(x);
console.log(age);
console.log(price);
console.log(gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`)


//..................................................................................
//..................................................................................
 [2] STRINGS

 USING STRINGS IN JAVASCRIPT, when uing words, you use("") to assign the value of a declaration, unlike numbers, where you don't use ("")
   i.e 
      let lastname = "Code"  unlike numbers that is: 
      let x        = 100
*/

let firstname = "Bro";
let favoritefood ="pizza";
let email ="Bro123@gmail.com";

console.log(typeof firstname);


console.log(`Your name is ${firstname}`);
console.log(`Your favoritefood is ${favoritefood}`)  
console.log(`Your email is ${email}`);

//..................................................................................
//..................................................................................
/* [3]    BOOLEANS
 booleans are either (true or false), they are typically used as flex in a program
*/

/*let online = true;
let offline = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);

console.log(`Bro is online: ${online}`);
console.log(`Bro is offline: ${offline}`);
console.log(`Is this Car for Sale:${forSale}`);
console.log(`Enrolled:${isStudent}`);

/* this
 is
 all
 for
 now
*/

/*let fullName = "Bro Code";
let Age = 25;
let IsStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${Age}years old`;
document.getElementById("p3").textContent = `Are you a Student: ${IsStudent}`;

//..................................................................................
//..................................................................................


/* [4]    ARITHMETICS OPERATORS
      Arithmetric operators = operands(values, variables, e.t.c)
                              operators(+,*, /)
                              ex. 11= x+5;


let Students=30

/*Students = Students + 1;
Students = Students - 1;
Students = Students * 2;
Students = Students / 2;
Students = Students ** 3 
Students = Students % 2     */

/*Students += 3;
Students -= 1;
Students *=2;
Student /=2; 
Students **= 2;
Students %= 2 */

console.log("Students");

//..................................................................................
//..................................................................................

/* [5]        OPERATOR PRECEDENCE
  operator precedence
  1. parenthesis
  2. exponents
  3. multiplication &  division modulo
  4. addition & subtraction */
  
  let result = 1 + 2 + 3 + 4 ** 2
  console.log(result); 


//...................................................................................
//..................................................................................
  
// [6]    how to accept a user input
  //1. EASY WAY = window prompt
  //2. PROFESSIONAL WAY= HTML textbox

 // let userName= brocode;
  //username= window.prompt("what's your usename?");

  
  // PROFESSIONAL WAY
   
  /*let username= brocode;
  
  document.getElementById(`mySubmit`).onclick=function(){
    username= document.getElementById(`myText`).value;
    console.log(username);


    document.getElementById("myH1").textContent= `Hello${"username"}`
  }*/

  /*let age= window.prompt("How old are you?")
  
  age+=1
  console.log(age, typeof age);

  let x;
  let y;
  let z;

  x = Number(x);
  y = String(y);
  z = Boolean(z);
  
  console.log(x, typeof x);
  console.log(y, typeof y);
  console.log(z, typeof z); */

//..................................................................................
//.................................................................................
 
//const = a variable that can't be changed
  /*const PI = 3.14159;

  let radius;
  let circumference;

  
  document.getElementById("mySubmiit").onclick = function(){
    radius= document.getElementById("myTextt").value
    radius = Number(radius);
    circumference = 2 * PI * radius
    document.getElementById("myH3").textContent = circumference;

  }*/
//..................................................................................
//..................................................................................

// [7] COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
 }

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count= 0 ;
  countLabel.textContent = count;
}
   
//...................................................................................
//...................................................................................


/*  [8]  MATH
Math is a built-in object that provides a collections of math related properties and methods.*/


//console.log(Math.PI);
//console.log(E)
/*let x = 3;
  let y = 2;
  let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z= Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(y,  x);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);

//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);

//console.log(min);
                           
//...................................................................................
//...................................................................................

//  [9]    RANDOM NUMBER GENERATOR


/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) +   min;
console.log(randomNum);*/


const myButton = document.getElementById("myButton")
const Label1 = document.getElementById("Label1")
const Label2 = document.getElementById("Label2")
const Label3 = document.getElementById("Label3")
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  Label1.textContent = randomNum1;
  Label2.textContent = randomNum2;
  Label3.textContent = randomNum3;
}

//...................................................................................
//...................................................................................


// [10]  IF STATEMENTS = if a condition is true, execute some code, if not, do something else

const myText= document.getElementById(`myText`);
const mySubmmit= document.getElementById(`mySubmmit`);
const resultElement =document.getElementById(`resultElement`);

let age;

mySubmmit.onclick=function(){
  
  age= myText.value; 
  age= Number(age);
 
  if(age>=100){
    resultElement.textContent=`You are TOO old to enter this site`;  
  }
  else if(age== 0){
    resultElement.textContent=`You can't enter, You were just born`;
  }
  else if(age >=18){
    resultElement.textContent=`You are old enough to enter this site`;
  }
  else if(age< 0){
    resultElement.textContent=`Your age cannot be below 0`;
  }
  else{
    resultElement.textContent=`You MUST be 18+ to enter this site`;
  }
}
  

/*let hasLicense = true;

if(age>=16){
  console.log(`You are old enough to drive`)
  
  if(hasLicense){
    console.log(`You have your license`)
  }

  else{
    console.log(`You do not have your lisence yet`)
  }
   
}
else{
  console.log(`you MUST be 16+ to have a license`)
}

let time= 14;
 if(time<12){
    console.log(`Good morning`)
 }
 else{
  console.log(`Good afternoon`)
 }

 let isStudent=false;

 if(isStudent){
  console.log(`You are a student`);
 }
 else{
  console.log(`You are not a student`);
 }
*/
 
//..................................................................................
//..................................................................................


//  [11]  checked = property that determines a checked state of an html checkbox or radio button element.
const myCheckBox = document.getElementById(`myCheckBox`);
const visaBtn = document.getElementById(`visaBtn`);
const mastercardBtn = document.getElementById(`mastercardBtn`);
const paypalBtn = document.getElementById(`paypalBtn`);
const mySubmiitt = document.getElementById(`mySubmiitt`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);

mySubmiitt.onclick = function(){
  
  if(myCheckBox.checked){
     subResult.textContent = 'You are subscribed!';
  }
  else{
    subResult.textContent = 'You are NOT subscribed!';
  }

  if(visaBtn.checked){
    paymentResult.textContent ='You are paying with Visa';
  }
  else if(mastercardBtn.checked){
    paymentResult.textContent ='You are paying with MasterCard';
  }
  else if(paypalBtn.checked){
    paymentResult.textContent ='You are paying with PayPal';
  }
  else{
    paymentResult.textContent ='You MUST select a payment type!';
  }
  
} 
//........................................................................................
//........................................................................................
 
/* [12]   TERNARY OPERATOR 
    it is a shoortcut to if{} and else{} statements, helps to assign a variable based on a condition;
    condition ? codeIfTrue : codeIfFalse; note the "?" is the ternary operator, you write a condion, then put question mark.*/
  
 //let time = 12;
 //let message = time >= 18? "You're an adult":"You're a minor"; 
 //console.log(message);

 //let time = 16;
 //let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
 //console.log(greeting);

 //let isStudent= false;
 //let message = isStudent ? "You are a student" : "You are NOT a student";
 //console.log(message);

 /*let purchaseAmount = 125;
 let discount = purchaseAmount >= 100? 10 : 0;
 console.log(`Your total is $${purchaseAmount - purchaseAmount *   {discount}}`);
*/
//......................................................................................
//......................................................................................

//  [13] SWITCH = Can be an efficient replacement to using many else if statements
 let day = `pizza`;
 switch(day){
  case 1:
    console.log(`it is Monday`);
    break;
  case 2:
      console.log(`it is Tuesday`);
      break;
  case 3:
    console.log(`it is Wednesday`);
    break;
  case 4:
      console.log(`it is Thursday`);
      break;
  case 5:
    console.log(`it is Friday`);
    break;
  case 6:
      console.log(`it is Saturday`);
      break;
  case 7:
    console.log(`it is Sunday`);
    break;
  
  default:
    console.log(`${day} is not a day`);  
 
  }

  let testScore = 40;
  let letterGrade;

  switch(true){
    case testScore>= 90:
      letterGrade =`A`;
      break;
    case testScore>= 80:
      letterGrade =`B`;
      break;
    case testScore>= 70:
      letterGrade =`C`;
      break; 
    case testScore>= 60:
      letterGrade =`D`;
      break;
    case testScore>= 50:
      letterGrade =`E`;
      break;

    default: 
     letterGrade = `F` 
   
  }
  console.log(letterGrade);

//.......................................................................................
//........................................................................................

//  [14]  STRING METHOD = this allows for the manipulation of text (strings)
 
/*let userName= "Bro Code ";
//////charAt: is used to get the first letter of a string (0), or second(1) or third (2) 
  example:
 console.log(userName = userName.charAt(1));


//////lenght: is used to know the lenght of a word
 example:
 console.log(userName.length);


//////repeat(): is used to repeat a word more than once, and the number of times that should be repeated is stated within the parenthesis.
 example:
 console.log(userName.repeat()); [i.e .repeat(3), it repeats thrice, when you console it]


//////trim: removes the amount of spaces after or before in a userName, after the first quotation mark, or before the last quotation mark
example:
 console.log(userName.trim);


//////indexof("o"):it is the number of occurence of an alphabeth in a word that is placed as a username, like the letter "o" in BROCODE, always start to count from "0"
example:
 console.log(userName.IndexOf("o")); and it occured twice.


//////lastindexof(" "):it is the position of an alphabet that  of occured, i.e the last alphabet of 'indexof' like the letter "o" in BROCODE, always start to count from "0"
example:  
 console.log(userName.lastIndexOf("o"));


//////toUpperCase: is used to change all the alphabeth of a word (ie the userName)to capital letters.
 example:
 console.log(userName.toUpperCase);


//////toLowerCase: is used to change all the alphabeth of a word (ie the userName)to capital letters.
 example:
 console.log(userName.toLowerCase);

///////startswith(" "): is used if the userName starts with space after the first quotation mark, so when you console, it answers true(there's space) or false(there's no space), you can use the "else" property.
example:
 let rresult = userName.startsWith(" ");
 if(rresult){
  console.log("Your username can't begin with ' '");
 }
 else{
  console.log(userName);
 }

///////endswith(" "): is used if the userName ends with space before the last quotation mark, so when you console, it answers true(there's space) or false(there's no space), you can use the "else" property.
example:
let rresult = userName.endsWith(" ");
 if(rresult){
  console.log("Your username can't end with ' '");
 }
 else{
  console.log(userName);
 }

///////include(" "): is used for firstname and last name having space between them, so when you console, it answers true(there's space) or false(there's no space), you can use the "else" property.
example:
let rresult = userName.includes(" ");

 if(rresult){
  console.log("Your username can't include ' '");
 }
 else{
  console.log(userName);
 }


 let phoneNumber = 123-456-7890;
  
 phoneNumber = phoneNumber.padStart(15, "0");

 console.log(phoneNumber);
 
 //.........................................................................................
 //..........................................................................................

 //  [15]   STRING SLICING= Creating a substring from a portion of another string, it won't alter the main string(the original)=== string.slice(start, end)*/
   
 /*NOTE: the begining of a string is "0",   
 const fullName = "Bro Code"

 let firstName = fullName.slice(0, 3);//(firstName = fullName.slice();), it will be: {firstName = Bro Code(Which is the fullname). (starting with '0',then counting first name is B1, R2, O3),we count from zero, so 'B' in 'BRO CODE' is 0, then R=1, O=2 then the ending number that is 3 in (0, 3) is the total number of character, i.e total number of first name, also the ending indent is exclusive, i.e you must add 1 more, that's why it's 3 and not 2. 
 let lastName = fullName.slice(4, 8);// we count the space between "bro" and "code", making it 3 i.e b=0, r=1, o=2, space=3, so "C" will now be 4, O=5, D=6, E=7 then ending indent will now makeit be 8,(though you dont necessary need to put the ending index)
 
 console.log(firstName);
 console.log(lastName);

 
 let firstChar = fullName.slice(0, 1);//firstChar means first character, [answer is B]
 let lastChar = fullName.slice(-1);//You'll begin from the end when using a negetive index (i.e -1), [so d answer to -1 is "e"], [then for -2, the answer will be "de"], [then for -3, the answer will be "ode"], [then for -4, the answer will be "code"] like that.
 
 console.log(firstChar);
 console.log(lastChar);
 
 
 -----------------------USING ANOTHER fullName:
 

 const fullName= "Broseph Code";

 let firstName = fullName.slice(0, fullName.indexOf(" "));
 let lastName = fullName.slice(fullName.indexOf(" ")); [the answer is Broseph code] //this will add the space between Broseph and Code, so once you console, you will see (Broseph)( Code), so you can see the space before the letter 'c'.
 let lastName = fullName.slice(fullName.indexOf(" ")+ 1); [the answer is Broseph code] //this will NOT add ANY space between Broseph and Code, so once you console, you will see (Broseph)(Code), without space before the letter 'c'.

 console.log(firstName);
 console.log(lastName);
 
 
 //example: 
 const Email = "Bro1@gmail.com"
 let username = Email.slice(0, Email.indexOf("@"));i.e anything before @, [the answer is "Bro1"]    //remember the begining of a string is always zero, char means character
 let extension = Email.slice(Email.indexOf("@")); the subscript will begin after Bro1, [the answer is "@gmail.com"]
 let extension = Email.slice(Email.indexOf("@") + 1); [the answer is "gmail.com"]

 console.log(username);
 console.log(extension);*/

 //........................................................................................................................................................................................
 //............................................................................................................................................................................................

/*    [16]    METHOD CHAINING = calling one method after another in one continous line of code.
 
 they consist of:     (A) NO METHOD CHAINING               (B) METHOD CHAINING

 //**** NO METHOD CHAINING:
   
  let username = window.prompt("Enter your username");
  
  username = username.trim();
  let letter = username.charAt(0);
  let letter = letter.toUpperCase();

  let extraChars = username.slice(1); //extraChars means extracharacters
  extraChars= extraChars.toLowerCase();
  username = letter + extraChars;
  
  console.log(username);
   

// **** METHOD CHAINING:
   
 username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); //charAt(0) means character at index "0",slice(1) means slice the string after the first character.  
 console.log(username);

//.......................................................................................................................................................................
//...........................................................................................................................................................................................................

//   [17] LOGICAL OPERATORS = IT IS USED TO CONBINE OR MANIPULATE BOOLEAN VALUES(TRUE OR FALSE)

// AND = &&
// OR = ||
// NOT = !             */

//const temp = 200;
/*if(temp > 0 && temp <= 30){ // if temp = -100, [answer: the weather is bad], to join two conditions together, both needs to be true.
  console.log("The weather is GOOD");
}
else{
  console.log("The weather is BAD");
}

--------OR


if(temp <= 0 || temp > 30){ // if temp = -100, [answer: the weather is bad], to join two conditions together, both needs to be true.
  console.log("The weather is BAD");
}
else{
  console.log("The weather is GOOD");
}

const isSunny = true;
if(!isSunny){
  console.log("it is CLOUDY")
}
else{
  console.log("it is SUNNY")
}
*/


//.............................................................................................................................
//.............................................................................................................................

//  [18]   OPERATORS.

// = assignment operator (seen when you assign a value to an operator)
// == comparison operator (it is used to compare two values, to know if they are equal)
// === strict equality operator (compares if values are equal, also if datatypes are equal)
// != inequality operator
// !== strict inequality operator

/*const PI = 3.14;
if(PI == "3.14"){
  console.log("that is Pi")
}
else{
  console.log("that is NOT Pi");
}
// if it has == sign, [the answer will be (that is pie), but if it has ===, the answer will be (that is NOT pie), because using a strict comparism, we no only compare the values, but we compare the data types, the first PI is a number data type, while the second PI is a string data type, having ("") on the 3.14 i.e "3.14"]

//..................................................................................................................................
//..................................................................................................................................

//WHILE LOOP = Repeats some code WHILE some condition is true, while loop repeats a code till infinity, if the statement is true.*/
/*let username = "";
while(username === ""){
  console.log(`you didnt enter your name`);
}
console.log(`hello ${username}`);*/

//................................................................................................
//................... ............................................................................................

//  [19]   FOR LOOP= repeat some code a limited amount of times.

/* for(let i = 0; i <= 2; i++){     // this means, let i=0, we will continue as long as i is less than or equals to 2, then the ++ means keep increasing
   console.log("Hello");           // [the answer is Hello (thrice)
}
  but if we do :
    console.log(i)    [the answer is 0,1,2 vertically]



for(let i = 0; i < 10; i++)       // it will start from zero because i = 0, and end at 9, because the second "i" is less 10
   console.log(i);               //[the answer is 0,1,2,3,4,5,6,7,8,9 vertically]


for(let i = 1; i <= 10; i++){   
   console.log(i);              // [the answer is 1,2,3,4,5,6,7,8,9,10 vertically]
}


for(let i = 1; i > 0; i+=2){       // so it increases by '2s'
  console.log(i);                 //[the answer is 1,3,5,7,9 vertically ]


for(let i = 2; i > 0; i-=2){     // i.e "i" should start counting by '2'
  console.log(i);               // [the answer is 2,4,6,8,10]


for(let i = 10; i > 0; i--){      // ie counting down to New Year
  console.log(i);                // [the answer is 10,9,8,7,6,5,4,3,2,1 HAPPY NEW YEAR! ]
}
 console.log("HAPPY NEW YEAR!")


for(let i = 10; i > 0; i-=2){    // ie counting down by 2, you can even increase the second "i" to 3 or 4 or whaeteva number you please. 
  console.log(i);                // [the answer is 10,8,6,4,2 ]
}
console.log("HAPPY NEW YEAR!") */

/*for(let i = 1; i <= 20; i++){     // i =1, and we'll continuebas long as "i is less than or equals to 20"
  console.log(i);                 // [the answer is 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 vertically]
}*/

/*for(let i = 1; i <= 20; i++){
  
  if(i == 13){
    continue;                 //[the answer is 1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20  note: that there's no 13, so this removes 13 from the counting]
  }
  else{
    console.log(i);
  }
  
}


for(let i = 1; i <= 20; i++){ //(there are up to 3statements to write, let i = 1 is a temporary variable, that serves as a counter, i <=20 is a condition at which we should continue, i++ increaments or decreaments our counter
  
  if(i == 13){
    break;                //break will break out of the loop entirely [the answer is 1,2,3,4,5,6,7,8,9,10,11,12.  note: that there's no 13 - 20, so this stops at 12, and breaks, then removes everything from 13 till the end]
  }
  else{
    console.log(i);
  }

}

//................................................................................................................
//...................................................................................................................................

//  [20]   NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = (Math.random() * (maxNum - minNum + 1)) 

console.log(answer);        //[the answer will give you random numbers from 1-100, decimals inclusive]


const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) 

console.log(answer);        //[the answer will give you random approximate numbers from 1-100, whole numbers, no decimals ]



const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum      //note:Math.floor is used to round down.

console.log(answer);                  //[the answer will give you random numbers from 50-100]    */        

/*const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1))  //[the answer will give you random numbers from 50-100]

let attempts = 0;
let guess;
let running = true;

while(running){   // note you are not suupposed to put while in a (true 0r false) boolean,just running
 
  guess = window.prompt(`guess a number between ${minNum} -${maxNum}`)
  guess = Number(guess);
  
  if(isNaN(guess)){
    window.alert("Please enter a valid number");
  }
  else if(guess < minNum || guess > maxNum){
    window.alert("Please enter a valid number");
  }
  else{
    attempts ++;
    if(guess < answer){
      window.alert("TOO LOW, TRY AGAIN");
    }
    else if(guess > answer){
      window.alert("TOO HIGH, TRY AGAIN");
    }
    else{
      window.alert(`CORRECT! The answer was${answer}, it took you ${attempts} attempts`)
      running = false;
    }

  }
  running = false;
} */                       
//..................................................................................................................
//...............................................................................................................................

//   [21]  FUNCTION = A section of reuseable code. Declare code once, use it whenever you want, you just have to call it. Call the function to execute that code.

 /*function happyBirthday(username, age){    // (username, age) are called parameters
   console.log("Happy birthday to you!");
   console.log("Happy birthday to you!");
   console.log(`Happy birthday dear ${username}!`);
   console.log("Happy birthday to you!");
   console.log(`You are ${age} years old`);
 }
  // to call a function, you call the function name, add a set of parenthesis, then ("name", age) are called arguments
  
  happyBirthday("BroCode", 25);      //[the answer is Happy Birthday dear BroCode, you are 25years old]
  happyBirthday("Spongebob", 30);    //[the answer is Happy Birthday dear SpongeBob, you are 30years old]
  happyBirthday ("Patrick", 39);     //[the answer is Happy Birthday dear Patrick, you are 39years old]


function add(x, y){
  //let result = x + y;
  //return result;
      //OR written as
  return x + y
}
 //let answer = add(2, 3);
console.log(answer);   //[the answer is 5]

     OR written as

console.log(add (2, 3)); //[the answer is still 5]

function subtract(x, y){
  return x - y;
}
console.log(subtract (2, 3));


function multiply(x, y){
  return x * y;
}
console.log(multiply (2, 3));


function divide(x, y){
  return x / y;
}
console.log(divide (2, 3));

function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  else{
    return false;
  }
        OR    
  return number % 2 === 0? true: false    
}


function isValidEmail(email){
 if(email.includes("@")){
    return true;
  }
  else{
    return false;
  }
  return email.includes("@")? true: false
}


console.log(isValidEmail ("Bro@fake.com"));
console.log(isValidEmail ("ElonMusk.com"));
console.log(isValidEmail ("ZuckerBog@meta.com")); */

//.........................................................................................................
//....................................................................................................................

//  [22]    DATE OBJECTS= Objects that contains values that represents date and time. These dates can be changed and formatted.

/* date(year, month, day, hour, minute, second, ms)

const date = new Date(2024, 2, 14, 14, 25, 5, 6);
console.log(date);
*/

//OR

/*string representation of time

const date= new Date =("2024.01-02T12:00:00Z");
console.log(date);
*/

//using miliseconds
 /*const date = new Date(170000000000);
 console.log(date);
 */
const date = new Date(); 

/*const year = date.getFullYear();//2024
const month = date.getMonth();//2
const Day = date.getDate();//5
const hour = date.getHours();//15
const minutes = date.getMinutes();//6
const dayoftheweek = date.getDay();//5


console.log(year);
console.log(month);
console.log(dayoftheweek);
console.log(hour);
console.log(minutes);
console.log(dayoftheweek);
*/


date.setFullYear(2024);
date.setMonth(2);
date.setDate(15);
date.setHours(13);
date.setMinutes(33)

console.log(date);


const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 <  date1){
  console.log("HAPPY NEW YEAR!")
}
else{
  console.log("NEW YEAR'S EVE")
}

//......................................................................................................................................................................................
//............................................................................................................................................................................

/*  [23] SCOPE = it is a set of codes that has all the variables defined in it, and those variables are only accessible inside the scope, 
                 anything outside the scope doesn't have access to those variables.*/

/*VARIABLE SCOPE = Where a variable is recognized and accessible [(local- inside a function, here even if there exist a global function in the statement, 
                the local function is taken before the global, here x=1 in function1, and x=2 in function2) vs (global-outside of a function, 
                it is used when there is no local function, here the global will be x = 3)].*/


function1();

function function1(){
  let x = 1;
  console.log(x);
}

 
//..............................................................................................................................................................................
//..................................................................................................................................................................................

//   [24]  SET TIMEOUT (callback, delay); clearTimeout(timeoutId) = used to cancel a timeout before it triggers.

setTimeout(function(){
  console.log("Hello")
}, 30000); 
startTimer()


function sayHello(){
  window.alert("Hello");
}

setTimeout(sayHello,3000);


setTimeout(function(){window.alert("Hello")}, 3000);

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);

timeoutId;

function startTimer(){
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimeout(){
  clearTimeout(timeoutId);
  console.log("CLEARED");
}

//..........................................................................................................................
//.........................................................................................................................

//   [25]   SORT()  = a method used to sort element of an array in a place. so we SORT elements as strings
//          in lexicographic order, not alphabeticl order.
//          LEXICOGRAPHIC ORDER = (alphabet + numbers + symbols) as strings 





let fruita = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbere =[1, 10, 2, 9, 3, 8, 4, 7, 5, 6 ]

fruita.sort();
numbere.sort((a, b) => b - a);

console.log(fruita);
console.log(numbere);

const people = [{name:"Spongebob", age: 30, gpa: 3.0}, 
                {name:"Patrick", age: 37, gpa: 1.0}, 
                {name:"Squidward", age: 51, gpa: 2.5}, 
                {name:"Sandy", age: 27, gpa:4.0}]

 people.sort((a, b) => b.name.localeCompare(a.name));//[the answer is in alphabetical order, ascending or descending order]
 console.log(people);               
               
//.............................................................................................................................................
//.............................................................................................................................................

//  [26]  FISHER-YATES ALGORITHM : (SHUFFLING BULKY ARRAY) Using for making a game

const cards = ['A', 2, 3, 4, 5, 6, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

function shuffle(array){
  for(let i = array.length - 1; i > 0; i --){
    const random = Math.floor(Math.random() *(i + 1));

    [array[i], array[random] = array[random], array[i]];

  }
}

//.............................................................................................................
//.............................................................................................................
//  [27]   ARRAYS

const fruity =[{name:"apple", color: "red", calories: 95},
  {name:"orange", color: "orange", calories: 45},
  {name:"banana", color: "yellow", calories: 105},
  {name:"coconut", color: "white", calories: 159},
  {name:"pineapple", color: "yellow", calories: 37}];

console.log(fruity[2].name);
console.log(fruity[3].calories);

//fruity.splice(1, 2);

//fruity.pop();

//fruity.push({name: "grapes", color:"purple", calories:62});


console.log(fruity);

//*******forEach method********//

fruity.forEach(fruity => console.log(fruity.name));
fruity.forEach(fruity => console.log(fruity.color));
fruity.forEach(fruity => console.log(fruity.calories));

//*******Math method********//

const fruityNames = fruity.map(fruity => fruity.name);
const fruityColors = fruity.map(fruity => fruity.color);
const fruityCalories = fruity.map(fruity => fruity.calories);

console.log(fruityNames);
console.log(fruityColors);
console.log(fruityCalories);


//*******filter method********//

const yellowFruity = fruity.filter(fruity => fruity.color ==="yellow");
const lowCalFruity = fruity.filter(fruity => fruity.calories <100);
const highCalFruity = fruity.filter(fruity => fruity.calories >100);

console.log(yellowFruity);
console.log(lowCalFruity);
console.log(highCalFruity);

//*******reduce method********//
const maxFruity = fruity.reduce((max, fruity) => fruity.calories > max.calories? fruity: max);

console.log(maxFruity);

const minFruity = fruity.reduce((min, fruity) => fruity.calories <  min.calories? fruity: min);

console.log(minFruity);












































//this is a comment
 
/*this
 is
  also a comment for words that are more than a line  
*/
