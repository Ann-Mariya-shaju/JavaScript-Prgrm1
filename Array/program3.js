// Looping through index
// --------------------------

// Find even numbers and odd numbers from the given array
var arr=[1,2,3,4,5,6,7,8,9,10];

var oddArray = [];
var evenArray = [];

for(let i in arr){
    if(arr[i]%2==0){
        evenArray.push(arr[i])
    }
    else{
        oddArray.push(arr[i])
    }
}
console.log("Even Numbers");
console.log(evenArray);

console.log("Odd Numbers");
console.log(oddArray);


// looping througheach item inthe array
// ---------------------------------
// find cube of each number in array

var arr1=[2,5,7,9]
for(let item of arr1){
    console.log(item**3)
}

// find lowest amount from the given array
var amount=[300,450,145,90,200,360,500];
 let lowestAmount = amount[0]

 for(var item of amount){
    if(item<=lowestAmount){
        lowestAmount=item
    }
 }
 console.log("Lowest Amount:",lowestAmount);

//  find highest amount from the given array

var amount1 = [300,500,160,560,380,800,750,640];
let highestAmount = amount1[0];
for(item of amount1){
    if(item>=highestAmount){
        highestAmount=item
    }
}
 console.log("Highest Amount:", highestAmount);
 

