// forEach
// --------------
// to print each item in an array
const arr = [1, 2, 3, 4, 5]
arr.forEach((item) => {
    console.log(item);

})

// find the index and item in an array
console.log("-----------------------------");

const arr1 = [1, 2, 3]
arr1.forEach((a, i) => {
    console.log("item:", a);
    console.log("index", i);

})

// result_array=[3,6,9,12,15]  
// multipy by 3 using forEach()
console.log("--------------");
var numbers = [1, 2, 3, 4, 5]

var result_array = []
numbers.forEach((item) => {
    result_array.push(item * 3)


}
)
console.log(result_array);
