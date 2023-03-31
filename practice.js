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