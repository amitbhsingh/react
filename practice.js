var ourStr= "This is the first string! "
ourStr += "This is the second string"
console.log(ourStr)

var ourarray= [50,60,70];
var ourdata=ourarray[0];
console.log(ourdata)

/* modiy arrays with indexes */
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
