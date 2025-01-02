// Nested Array
// ------------------------

let arr=[1,2,3,[4,5]]
let flatArray = arr.flat(1)
console.log(flatArray);

// example2 
// -----------------
console.log("-------------------------");

let arr1=[1,2,3,[4,5,[6,7]]]
console.log(arr1.flat(1));
console.log(arr1.flat(2));
console.log("upto dynamic level:",arr1.flat(Infinity));

// example 3
// --------------------------
console.log("--------------------------------");
const arrNew = [1,[2,[3,[4,[5]]]]]
console.log("flat():",arrNew.flat());
console.log("flat(2):",arrNew.flat(2));
console.log("flat(infinity):",arrNew.flat(Infinity));

// example 4
// --------------------------
console.log("--------------------------------");
const arr2= [1,2,,,5,6]
//to remove empty slots
console.log("flat:",arr2.flat());


