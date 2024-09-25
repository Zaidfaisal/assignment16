// chapter 14 - 16
// Q1
// var Arrar = [];
// Q2
// var Arrar = new Array();
// Q3
// var Fruits = ["Banana","Grapes","Apple","Mango"]
// Q4
// var Numbers = [1,2,3,4,5]
// Q5
// var flags = [true, false, true];
// Q6
// var mixedarray = [1,"zaid",true,undefined]
// // Q7
// var education = ["SSC","HSC","BSC","BS","BCOM","MS","M.PHIL","PhD"]
// docoument.write(education[0],"<br>",
//     education[0],"<br>",
//     education[0],"<br>",
//     // education[0],"<br>",
//     // education[0],"<br>")
// Q8
// var studentNames = ["John,Michel,Tony"]
// var studentScores = [320,230,480]
// var totalMarks = 500;


// var percentage1 = (studentScores[0] / totalMarks) * 100;
// console.log(studentNames[0] + "'s score is " + studentScores[0] + ". Percentage: " + percentage1.toFixed(2) + "%");

// var percentage2 = (studentScores[1] / totalMarks) * 100;
// console.log(studentNames[1] + "'s score is " + studentScores[1] + ". Percentage: " + percentage2.toFixed(2) + "%");

// var percentage3 = (studentScores[2] / totalMarks) * 100;
// console.log(studentNames[2] + "'s score is " + studentScores[2] + ". Percentage: " + percentage3.toFixed(2) + "%");
// Q9
// var colornames = ["red","blue","green"]
// Q10
// const scores = [85, 92, 76, 81, 95, 88, 70];
// scores.sort((a, b) => a - b);
// console.log("Sorted student scores in ascending order:", scores);
// Q11
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Diego"];
// var selectedCities = [];
// selectedCities = cities.slice(0, 3); 
// console.log(selectedCities);

// Q12
// var arr = ["This ", "is ", "my ", "cat"];
// var singleString = arr.join('');
// console.log(singleString);
// Q13
// const queue = [];
// function enqueue(value) {
//     queue.push(value);
// }
// function dequeue() {
//     return queue.shift();
// }
// enqueue('Apple');
// enqueue('Samsung');
// enqueue('Motorola');
// console.log(dequeue()); 
// console.log(dequeue());
// console.log(dequeue()); 
// Q14
// const stack = [];
// function pushValue(value) {
//     stack.push(value);
// }
// function popValue() {
//     return stack.pop();
// }
// pushValue('Apple');
// pushValue('Samsung');
// pushValue('Motorola');
// console.log(popValue());
// console.log(popValue()); 
// console.log(popValue()); 
// Q15
// const manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// let dropdown = '<select name="manufacturers" id="manufacturers">';
// manufacturers.forEach(manufacturer => {
//     dropdown += `<option value="${manufacturer}">${manufacturer}</option>`;
// });
// dropdown += '</select>';
// document.write(dropdown);


// chapter 17-20

// Q1
// var array = [[]]
// Q2
// var array = [[0,1,2,3] +"<br>",
// [1,0,2,3] +"<br>",
// [2,1,0,1]];
// document.write(array)
// Q3
// for(i=1;i<=10;i++){
//     document.write(i,"<br>")
// }
// Q4
// var nummber = +prompt("Enter the number to show its multiplication table")
// var range = +prompt("Enter the lemght of multiplication table")
// for(i=1;i<=range;i++){
//    document.write(`${nummber} x ${i} = ${i*nummber} <br>`)
// }
// Q5
// var fruits =["apple", "banana", "mango", "orange",
//     "strawberry"]
//     for(i=0;i<fruits.length;i++){
//         document.write(`${fruits[i]} <br> Element at ${i} index is` +   fruits[i] + "<br>" )
//     }
// Q6
// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var reversecounting = [10,9,8,7,6,5,4,3,2,1]
// var even = [0,2,4,6,8,10]
// var odd = [1,3,5,7,9]
// var series = ["2k","4k","6k","8k","10k","12k","14","16","18","20"]
// document.write("<h1>counting</h1><br>"+counting,"<h1>reversecounting</h1><br>"+reversecounting,"<h1>even</h1><br>"+even,"<h1>odd</h1><br>"+odd,"<h1>series</h1><br>"+series)
// Q7
// var items = ["cake","applepie","chips","cookies","patties"]
// var userInput = prompt("Enter the item you want to search for:");
// if(items.includes(userInput)){
//     console.log(`${userInput} is found in the list.`);
// }
// else{
//     console.log(`${userInput} is not found in the list.`);
// }
// Q8
// const A = [24, 53, 78, 91, 12];

// var largestNumber = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// console.log("The largest number in the array is:", largestNumber);
// Q9
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0]; 
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }
// console.log("The smallest number in the array is:", smallest);
// Q10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i+"<br>");
//     }
// }


