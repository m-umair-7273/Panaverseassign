"use strict";
console.log("Mirza Umair");
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
var minus = num1 - num2;
var product = num1 * num2;
var exponent = 5 ** 10;
var division = num2 / num1;
var reminder = 2 / 5;
console.log(exponent);
console.log(reminder);
var remainder1 = 3 % 4;
console.log(remainder1);
if (false) {
    console.log("Mirza Umair");
}
if (true) {
    console.log("Muhammad Umair");
}
if (true) {
    console.log("Mirza Muhamamd Umair");
}
if (5 < 5) {
    console.log("Anwar");
}
if (6 > 8 - 4) {
    console.log("Anwar Muhammad");
}
//if(loginemail==signupemail && loginpassword==signuppassword){console.log("email");}
if (2 < 5) {
    console.log("Parent");
    if (2 + 5 > 2 * 5) {
        console.log("1st child");
        if (5 < 3) {
            console.log("2nd child");
        }
    }
}
if (10 > 20) {
    console.log("FAIL");
}
else {
    console.log("PASS");
}
var marks = 50;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks < 90 && marks >= 80) {
    console.log("Grade B");
}
else if (marks < 80 && marks >= 70) {
    console.log("Grade C");
}
else if (marks < 70 && marks >= 50) {
    console.log("Grade D");
}
else if (marks < 50) {
    console.log("Grade F");
}
//exercise 1// // area of reactangle//
var length = 10;
var width = 20;
var Area = length * width;
console.log(Area, "sqft");
//excersise 2// // volume of cube//
var length = 10;
var width = 20;
var height = 30;
var Volume = length * width * height;
console.log(Volume, "cft");
// exercise 3// // if a given number is +ve, -ve or zero//
var number = -20;
if (number > 0) {
    console.log("Is a Positive Number");
}
else if (number < 0) {
    console.log("Is a Negative Number");
}
else {
    console.log("Zero");
}
//exercise 4// //to check even and odd number//
var num3 = 5;
if (num3 % 2 == 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}
//exercise 5// // vote right based on age//
var Age = 17;
if (Age >= 18) {
    console.log("Right to Vote");
}
else if (Age < 18) {
    console.log("No Right to Vote");
}
// exercise 6// // mathematicall Expression//
var expression1 = (((10 + 5) * 3 - 2) / (4 % 3) - 7);
console.log(expression1);
var today = 4;
switch (today) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("your section is not A");
        break;
}
