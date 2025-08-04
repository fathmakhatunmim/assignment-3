/** Problem 06 :  (Current Salary )  */ 
var experience = 3 ; 
var startingSalary = 15000 ; 
//write your code here 
var finalSalary = startingSalary * Math.pow(1.05,experience);
console.log(finalSalary.toFixed(2));