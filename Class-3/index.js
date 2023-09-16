"use strict";
/*//ASSIGNMENT//
//FOR CONVERTING TEMP FROM CELSIUS TO FAHRENHEIT//
var celsius : number = -1;
var fahrenheit = 32 + (celsius*1.8);
console.log("Temperature = ",fahrenheit,"F");

//FOR CONVERTING TEMP FROM CELSIUS TO FAHRENHEIT//
var Fahrenheit: number = 32;
var Celsius: number = (Fahrenheit-32)* 5/9;
console.log("Temperature = ",Celsius,"C");

// For %age calculation//
var number : number = 50;
var totalnumber : number = 100;
var percentage :number = (number/totalnumber)*100;
console.log(percentage,"%");

// number of days into weeks and days//
var Days = 20
var Week= Days/7

sumOf2(100,100);

var num1:number = 15;
var num2:number = 30;
var result:number = num1 /num2;
num1 *= 4;
var result1:number = num1 / num2;
console.log(result1);

console.log(`which include,"umair", 'uzair', "zubair", and value is ${result1}`);

function sumOf2(numb1:number, numb2:number) {
    var result2:number = numb1 + numb2;
    console.log(result2);
}
sumOf2(10,20);
sumOf2(50,100)

function cToFTemperature(tempC:number) {
var tempF:number = tempC *(9/5)+ 32
console.log("Fahrenheit =",tempF);
   
}
cToFTemperature(40);
cToFTemperature(0);

function _percentage(obtained:number, total:number) {
    var output:number = (obtained/total)*100
    console.log(`Percentage =`, output);
    
}

_percentage(900,1000);
_percentage(500,700);


//use function with return init and is used to add diff constants to same function

function sum(number1:number,number2:number) {
    var resultSum:number = number1 + number2;
    return resultSum
}

var resultNew:number= sum(20,10);
resultNew +=100
console.log(resultNew);

//to add same constant or not to a function

function sum1(number1:number,number2:number) {
    var resultSum:number = number1 + number2;
    resultSum +=10
    console.log(resultSum);
    
}


sum1(10,50);

//arrow function to make function run after it is created by compiler and not before it.

var sumArrow = (fig1:number, fig2:number)=>{
    var tResult:number = fig1 * fig2;
    console.log(tResult);
    
}

sumArrow(10,15);

//to use return command in arrow function use":number" before "=>"

var ali =(nicki1:number, nicki2:number):number => nicki1 + nicki2
 var hicki:number= ali(10,3);
 hicki *= 2
 console.log(hicki);

 //var, let and constant
 var aa:number= 2
 aa = 40
 console.log(aa);
let ab:number=90
let ac=80
const kl:number=8

let as:number=21
const ad:number = 3.14

//"Array" is a variable in which larger no. of data can be saved under a single name of a variable

var rollNumbers: number[] = [10,12,14,16,18,20,22,24,26,28,30];
console.log(rollNumbers);
console.log(rollNumbers[0]);
console.log(rollNumbers[3]);

var Call:number= rollNumbers[0]+rollNumbers[3]+rollNumbers[5];
console.log(Call);

rollNumbers[0] = 5
console.log(rollNumbers[0]);*/
var studentName = ["ali", "umair", "anwar", "zain"];
//console.log(studentName[2]);
//to check the length/no. of data in an array we use
//console.log(studentName.length);
// //using function with array
// function addNewStudents(studentnames:string) {
//     studentName[3]=studentnames
// }
// addNewStudents("sheikh")
// console.log(studentName);
//now to add a new name at the end of an array using function
function newStudentNames(newName) {
    studentName[studentName.length] = newName;
}
// newStudentNames("Asad")
// newStudentNames("Ahmad")
// newStudentNames("Arham")
// newStudentNames('Arsal')
studentName.push('AA'); //use to add data at the end of array 
studentName.push('AB');
studentName.pop(); //To remove last item from the array
studentName.shift(); // To remove first value from the start of an array
studentName.unshift('AC'); // To add new value at the start of an aaray
// splice is used to add or remove anything from start, mid or end 
// studentName.splice(1,0,'AD')  
// studentName.splice(0,0,'Asad')
console.log(studentName);
// For loop  
// for (let index = 0; index < 4; index++) {
//     console.log(`ab`);
//     console.log(`ac`);
// } //Or
//  for (let i = 0; i< 3; i++) {
//     console.log(12);
//  }
//  //While loop(works on true and false condition)
// var index:number = 2
// while (index<=5) {
//     console.log('print it');
//     index= index+1
// }
