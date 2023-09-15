//                        CHP 12-13
// // 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII 
// // codes:- A=65, Z=90, a=97, z=122).
// function isNumber(char) {
//     return !isNaN(char) && !isNaN(parseFloat(char));
//   }
//   function isUppercaseLetter(char) {
//     var charCode = char.charCodeAt(0);
//     return charCode >= 65 && charCode <= 90;
//   }
//   function isLowercaseLetter(char) {
//     var charCode = char.charCodeAt(0);
//     return charCode >= 97 && charCode <= 122;
//   }
//   var character = prompt("Enter a character"); 
//   if (isNumber(character)) {
//     console.log(character + " is a number.");
//   } else if (isUppercaseLetter(character)) {
//     console.log(character + " is an uppercase letter.");
//   } else if (isLowercaseLetter(character)) {
//     console.log(character + " is a lowercase letter.");
//   } else {
//     console.log(character + " is not a number or letter.");
//   }


// //2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var int1=+prompt("Enter first integer");
// var int2=+prompt("Enter second integer");
// if(int1>int2){
//     document.write(int1);
// }
// else if(int2>int1){
//     document.write(int2);
// }
// else{
//     document.write("Both integers are equal")
// }

// //3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// var num=+prompt("Enter any number");
// if(num<0){
//     document.write("Number is negative");
// }
// else if(num==0){
//     document.write("Number is zero");
// }
// else {
//     document.write("Number is positive");
// }

// //4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// var ch=prompt("Enter a character");
// if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
//     document.write("True");
// }
// else{
//     document.write("False");
// }

// //5.
// var passC="hammad123";
// var passE=prompt("Enter password");
// if(!passE){
//     alert("Please enter your password");
// }
// else if (passE==passC){
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }


// //6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour =13;
// if (hour<18) {
// greeting = "Good day";}
// else {
// greeting = "Good evening";
// }

// //7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// var time=+prompt("Enter time in 24 hours clock format","1300");
// if (time>=0 &&time<1200){
//     document.write("Good morning!");
// }
// else if(time>=1200&&time<1700){
//     document.write("Good afternoon!");
// }
// else if(time>=1700&&time<2100){
//     document.write("Good evening!");
// }
// else if(time>=2100&&time<2359){
//     document.write("Good night!");
// }

////////////////////    CHP 14-16
//1. Declare an empty array using JS literal notation to store student names in future.
//var names=[];

//3. Declare and initialize a strings array.
//var names=["hammad","emad","saad"];

//4. Declare and initialize a numbers array.
//var num=[3,9,2,5];

//5. Declare and initialize a boolean array.
//var bol=[true,false];

//6. Declare and initialize a mixed array.
//var mix=[hammad,3,true,false];

// //7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// var A=["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL","PHD"];
// document.write("Qualifications:"+"<br>1) "+A[0]+"<br>2) "+A[1]+"<br>3) "+A[2]+"<br>4) "+A[3]+"<br>5) "+A[4]+"<br>6) "+A[5]+"<br>7) "+A[6]+"<br>8) "+A[7]);

// //8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var A=["Hammad","Emad","Saad"];
// var B=["457","444","485"];
// document.write("Score of "+A[0]+" is "+B[0]+". Percentage: "+(B[0]*100)/500+"%");
// document.write("<br>Score of "+A[1]+" is "+B[1]+". Percentage: "+(B[1]*100)/500+"%");
// document.write("<br>Score of "+A[2]+" is "+B[2]+". Percentage: "+(B[2]*100)/500+"%");

// //9. Initialize an array with color names. Display the array elements in your browser.
// var colors=["yellow","orange","green","maroon","white"];
// document.write(colors);
// //a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// var add=prompt("Enter the color you want to add at the beginning");
// colors.unshift(add);
// document.write("<br>"+colors);
// //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// var add2=prompt("Enter the color you want to add at the end");
// colors.push(add2);
// document.write("<br>"+colors);
// //c. Add two more color to the beginning of the array. Display the updated array in your browser.
// colors.unshift("purple");
// colors.unshift("silver");
// document.write("<br>"+colors);
// //d. Delete the first color in the array. Display the updated array in your browser.
// colors.shift();
// document.write("<br>"+colors);
// //e. Delete the last color in the array. Display the updated array in your browser.
// colors.pop();
// document.write("<br>"+colors);
// //f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// var i=+prompt("At which index you want to add a color");
// var add3=prompt("Enter color name");
// colors[i]=add3;
// document.write("<br>"+colors);
// //g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
// var index=+prompt("At which index you want to delete a color");
// var del=prompt("how many colors you want to delete");
// var x;
// for(x=index;x<del;x++){
//     colors.splice(index,del);
// }
// document.write("<br>"+colors);

// //10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var score=[320,230,480,120];
// document.write(score.sort(function(a,b){return a-b}));

// //11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// var cities=["karachi","lahore","islamabad","quetta","peshawar"];
// var selectedCities=cities.slice(0,3);
// document.write("Cities list:<br>"+cities);
// document.write("<br>Selected cities list:<br>"+selectedCities);

// //12. Write a program to create a single string from the below mentioned array:
// var arr = ["This","is","my","cat"];
// document.write("Array:<br>"+arr);
// document.write("<br>String:<br>"+arr.join(" "));

// //13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
// var arr=["keyboard","mouse","printer","monitor"];
// var i;
// for(i=0;i<arr.length;i++)
// {
//     document.write("<br>out:<br>"+arr[i]);
// }

// //14. Create a new array. Store values one by one in such a way that you can access the values in reverse order.
// var arr=["keyboard","mouse","printer","monitor"];
// var i;
// for(i=3;i>=0;i--)
// {
//   document.write("<br>out:<br>"+arr[i]);
//  }
