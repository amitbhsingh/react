var ourStr= "This is the first string! "
ourStr += "This is the second string"
console.log(ourStr)

var ourarray= [50,60,70];
var ourdata=ourarray[0];
console.log(ourdata)

/* modify arrays with indexes */
var our0array=["one","two",3]
ouarray=our0array[2]
console.log(ouarray)
/* push */
var our1array=["stimpson", "J", "cat"]
our1array.push(["happy","joy"])
console.log(our1array)
/* pop */
var our2array=[1,2,3];
var removedfromourarray=our2array.pop();
console.log(our2array)

/* Manipulating arrays with shift() */

var our3array=[4,5,6];
var removedfromourarray=our2array.shift();
console.log(our2array)
/* Manipulating arrays with unshift() */
var our3array=[4,5,['dog,1']];
var removedfromourarray=our2array.unshift(["paul",35]);
console.log(our2array)

/* Write reusable code function  */
function ourReusableFunction(){
    console.log("hey, wolrd!");
}
ourReusableFunction();

/* passing values to functions with arguments */
function ourFunctionwithargs(a,b){
    console.log(a-b);
}
ourFunctionwithargs(10,5);

/* Glocbal scope and functioning */
function fun1(){
    
}
function fun2(){
    var output="";
    if (typeof myGlobal != "undefined"){
        output+= "oopsGlobal: "+oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
/* function of minues */
function minusseven(num){
    return num -7;
}
console.log(minusseven(10))
/* understanding undefined value returned from a function */
var summ =0;
function addThree(){
    sum =sum +3;
}
function addFive(){
    sum+=5;

}

/* assignment with a returned value */
var changed=0;
function change(num){
    return (num+5)/3;
}
changed=change(10);
var processed= 0;
function processarg(num){
    return (num +3)/5;
}
/* stand in line */
function next(arr,item){
    //code 
    arr.push(item);
    return arr.shift(); // removes the first item and returns it
    
}

var testarr=[1,2,3,4,5];
console.log("Before: ", JSON.stringify(testarr));
console.log(next(testarr,6));
console.log("After: "+JSON.stringify(testarr));

/* boolean values */

function wcbool(){
    return false;
}
/* use conditional logic with if statements*/

function ourtrueorfales(isTrue){
    if (isTrue){
        return "yes, it's true";
    }
    return "no, it's false";
}
function trueorfalse(wasthattrue){
    if(wasthattrue){
        return "no, that was false"
    }
    return "yes, that was true"
}
console.log(trueorfalse(true));

/* Comparision with the equality operator*/

function testequal(val){
    if(val===12){
        return "equal";
    }
    return "not equal";
}
console.log(testequal('12'));
// == is not strict equality check but === is strick
/* elseif*/
function testelseif(val){
    if (val>10){
        return "Greater than 10";

    } else if (val<5){
        return "smaller than 5";
    } else
    return "Between 5 and 10";
}
console.log(testelseif(4));
/* Logical order in if else statements*/
function testelseif(val){
    if (val<5){
        return "Greater than 10";
    } else if (val<10){
        return "smaller than 5";
    } else {
    return "Between 5 and 10";
    }
}
console.log(testelseif(3));

/* Chaining if else*/
function testsize(num){
    if (num<5) {
        return "tiny"
    }
    else if (num <10) {
        return "small"
    } else if (num <15) {
        return "medium" 
    } else if (num <20) {
        return "Large"
    } else {
        return "huge"
    }
}
console.log(testsize(7));
console.log(testsize(15));
console.log(testsize(19));
/* using data */
var names=["Hole",
"eagle","birdie","par","bogey","2bogey","home"]
function golfscore(par,strokes){
    if (strokes==1) {
        return names[0]
    } else if (strokes <=par - 2){
        return names[1]
    } else if (strokes==par - 1){
        return names[2]
    }else if (strokes==par){
        return names[3]
    } else if (strokes == par +1){
        return names[4]
    } else if (strokes == par+2){
        return names[5]
    } else if (strokes >= par +3){
        return names[6]
    }
    
}
console.log(golfscore(2,3));
/* case in switch */
function caseinswitch(val){
    var answer="";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break;
    }
    return answer;
}
console.log(caseinswitch(2))
/* default in switch statement */

function caseinswitch(val){
    var answer="";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break;
        default:
            answer="stuff";
            break;

    }
    return answer;
}
console.log(caseinswitch("a"))

/* default in switch statement */
function sequan(val){
    var answer=":";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer ="low";
            break;
        case 4:
        case 5:
        case 6:
            answer ="mid";
            break;
        case 7:
        case 8:
        case 9:
            answer ="high";
            break;
    
    }
    return answer
}
console.log(sequan(11));
/* returning early pattern from functions */
function abtest(a,b){
    if (a<0 || b< 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2))

}
console.log(abtest(-2,2))
/* black jack card counting */
var count =0; 
function cc(card){
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "A":
            count--;
            break;
        
    }
    var holdbet= "Hold"
    if (count >0) {
        holdbet = "bet"
    }

    return count + " " + holdbet;
}
cc(2); cc('K'); cc(10); cc('K'); cc('A'); 
console.log(cc(4))
/* build javascript objects */
var ourdog={
    "name": "camper",
    "legs": 4,
    "trails": 1,
    "friends": ["everything"]
};

var mydog={
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends":[]
}
/* accesing object property with dot notation */
var testobj={
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue=testobj.hat;
var shirtValue=testobj.shirt;
console.log(shirtValue)
/* testing objects for properties */
var myobj={
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

function checkobj(checkprop){
    if (myobj.hasOwnProperty(checkprop)){
        return myobj[checkprop];
    }  else {
            return "not found";
        }
    
}

console.log(checkobj("hello"));
/* manipulating complex objects */
var mymusic= [
    {
        "artist": "billy joel",
        "title": "piano man",
        "release_year":1973,
        "formats":[
            "cd",
            "8t",
            "lp"
        ],
        "gold":true
    },
    {
        "artist":"bew",
        "title":"cereal",
        "realease": 2098,
        
    }
];

/* accesing nested objects */
var myray=[];
for (var i =0; i < 10; i++){
    myray.push(i);
}
console.log(myray)
for (var i=1; i<6; i++){
    myray.push(i);
}
console.log(myray);
/*count backwards for loop */
var ourarray=[] 
for (var i=10; i>0; i-=2){
    ourarray.push(i);
}
console.log(ourarray);
/*iterate through an array with a for loop */
var arr=[10,4,5,6,123,123,34]
var total=0
for (var i=0;i<arr.length;i++){
    total+=arr[i];
}
console.log(total);
/*nesting for loops */
function multiplya(arra){
    var product =1;
    for (var i=0; i<arra.length;i++){
        for (var j=0;j<arra[i].length; j++) {
            product *= arra[i][j]
        }
    }
    return product;
}
var product=multiplya([[1,2],[3,4],[5,6,7]]);
console.log(product);
/*itereate with DO while loops */
var myarray=[];
var i=10;
do {
    myarray.push(i);
    i++;
} while (i<5)
console.log(i,myarray)
/* Random whole number generator */
function rndm(){
    return Math.floor(Math.random()*30);
}
console.log(rndm());
/* Random fraction generator */
function rndmf(){
    return Math.random();
}
console.log(rndmf());
function rndmr(mymin,mymax){
    return Math.floor(Math.random()* (mymax-mymin+1))+mymin;
}
var myrnd=rndmr(35,39);
console.log(myrnd)
/* convert to integer */
function cnvrt(str){
    return parseInt(str,2);
}
console.log(cnvrt("10011"))
/* use the conditional ternary opeerator*/
function checke(a,b){

    return a===b? true : false;
    
    
}   
console.log(checke(1,2));
/* use multiple conditional ternary opeerator*/
function checks(num){
    return num>0? "postive" : num<0 ?"negative": "zero"
    
}   
console.log(checks(0));
/* differences between var and let keyword*/
let catname="quincy";
let quote;
catname="amit";
function cattalk(){
    "use strict";
    catname="oliver";
    quote=catname +"says meow";
}
console.log(cattalk);
/* const let and var ????*/
/* Mutate an array declared with const*/
const s =[5,6,7];
function editinplace(){
    "use strict";
    s[0]=2;
    s[1]=5;
    s[2]=7;
}
editinplace();
console.log(s);
/* Prevent object mutation*/
/* class syntax*/
class spaces{
    constructor(targetplanet){
        this.targetplanet=targetplanet;
    }

}
var zeus=new spaces('Jupiter');
console.log(zeus.targetplanet)

/* class syntax*/
function makeclass(){
    class vegetable{
        constructor(name){
            this.name=name;
        }
    }
    return vegetable;
}
const vegetable=makeclass();
const carrot=new vegetable('carrot');
console.log(carrot.name)
/* use getters and setters to control access to an object */
class book {
    constructor(author){
        this._author=author;

    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedauthor){
        this._author=updatedauthor;
    }

}
var magic=() => new Date();
console.log(magic());
/* arrow function */
const myconcat= (arr1,arr2)=> arr1.concat(arr2);
console.log(myconcat([1,2],[3,4,5])); 
/* arrow function with higher order */
const realn=[4,5.6,-9.8,3.14,42,6,8.34,-2]
const squarelist=(arr)=>{
    const squareint=arr.filter(num => Number.isInteger(num)&& num>0).map(x => x*x);
    return squareint;
};
const squareint=squarelist(realn);
console.log(squareint);
/* rest operator with arrow function */
const sum=(function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    };
}) ();
console.log(sum(1,2,3,4));
/* spread operator with arrow function */
const arrw=['Jan','Feb','Mar','Apr','May']
let arrx;
(function(){
    arrx=[...arrw];
    arrw[0]='potato'

})();
console.log(arrx);
/* desctructuring an assignment */
/* var voxel=[x:3,y:7.4,z:6.54];
var x =voxel.x;
var y= voxel.y;
var z=voxel.z;
////
 *///const {x:a,y:b,z:c}=voxel;
const avg_temp={
    today:77.5,
    tomorrow:79
};
function gettemp(avg_temp){
    "use strict";
    const{ tomorrow:temptom}=avg_temp;
    return temptom;

}
console.log(gettemp(avg_temp));
const x={
    min:12,
    max:48,
    std:22
};
const half =(function(){
    return function half({max,min}){
        return(max+min)/2.0;
    };
})();
console.log(x);
console.log(half(x));

/* template literal */
const person ={
    name:'AMit',
    age:38
};
const greeting =`hello, my name is ${person.name}! I am ${person.age} years old. `;
console.log(greeting);
// Doubling each element in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(nu => nu * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

function prepareGreeting(typeOfPet, numberOfPets) { 
    var greeting = '';
    for (let i = 0; i < numberOfPets; i++) {
      if (typeOfPet === 'cat') { 
        greeting += 'meow' + '<br/>';
      }
      if (typeOfPet === 'dog') { 
        greeting += 'woof' + '<br/>';
      }
    }
    return greeting;
  }
  console.log(prepareGreeting("dog",2))
  function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed= arr.shift(item);
    return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  
  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  console.log(lookUpProfile("Kristian","likes"));
  

 



  
  // Example usage:
  
 
  
  
  
  function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  const myArray = [1, 'two', 3, 'four', 5];
  const result = sumNumbers(myArray); // returns 9 (1 + 3 + 5)
  console.log(result)
  function sumn(arr){
    let i=0
    let tot=0
    while(i<arr.length){
        if(typeof arr[i]==='number'){
            tot+=arr[i];
            
        }
        i++
    }
    return tot
  }
  var res=sumNumbers(myArray)
  console.log(res)


  function sumb(arr){
    
    let s=0;
    for (i=0;i<arr.length;i++){
        if(typeof arr[i]==='numbers'){
            s+=arr[i] //s+= means s=s+arr[i]
        }
        return s;
        
    }
    

  }

  var res=sumb(myArray)
  console.log(res)
function mixx(arr){
    let tot=0;
    for (let i=0;i<arr.length;i++){
        if (typeof arr[i]==='number'){
            tot+=arr[i];
        }
        return tot;
    }
}
var mx=[1,2,3,4,5,6,10,'j','one']
console.log(mixx(mx));