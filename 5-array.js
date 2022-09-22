//Creating array
var scores=new Array(); //empty
var numbers=new Array(10); //array with initial size 10
var myNumbers=new Array(9,10,4,5); //array with initial elements
var athletes=Array(3); //array with initial size 3
var signs=Array('Red'); //array with one element

var emptyArray=[];
var colors=['red','green','blue'];
console.log(colors);

//Accesing array elements
var students=['Mike','Tim','Ozzy'];
console.log(students.toString());

console.log(students[0]);

//Basic operations on arrays
students.push('Emma'); //adds element to the end of an array
console.log(students);

students.unshift('Adam');//adds element to the beginning of an array
console.log(students);

students.pop();//removes an element from the end of an array
console.log(students);

students.shift();//removes an element from the beginnning of an arrays
console.log(students);

var index=students.indexOf('Mike');
console.log(index);

students.splice(0,1); //delete elements in arrays
console.log(students);

students.splice(1,1, 'Matt');//inserts elements
//2 - starting position in the array that new elements will be inserted
//0 instruct the splice() method not to delete any array elements
//Third argument,fourth argument, and so on are the new elements that are inserted into arrays
console.log(students);

var array=[1,30,4,21];
console.log(array.sort()); //cast elements to string and compares the strings to determine
