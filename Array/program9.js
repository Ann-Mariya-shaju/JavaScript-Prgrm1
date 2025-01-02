// map()
// --------
// need to find square of each number and return an array
let num = [1,2,3,4,5]
const result = num.map((item)=>item**2)
    console.log("result array:",result);
    console.log("original array: ",num);  
    
    
// Convert every element in the array to uppercase
console.log("----------");
let names=["john","shon","rose","kenneth"]
let uppercaseArray = names.map((item)=>item.toUpperCase());
console.log(uppercaseArray);

