// ascending order
// -------------------
var fruits = ['banana','kiwi','orange','apple','watermelon','avacado']
console.log(fruits.sort());

// descending order
// -----------------
console.log(fruits.sort((a,b)=>b.localeCompare(a)));


// number array
// ---------------

var num = [5,6,3,2,1]
console.log(num.sort());

// indexOf
// --------------
var numbers=[1,40,6,3,2,4,90,56,78]
console.log(numbers.indexOf(90));
console.log(numbers.indexOf(400));

