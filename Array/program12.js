// Reduce()
// -------------

// find sum of elements in the array using reduce method
const num = [1,2,3,4,5,6,7,8,9,10]
const result = num.reduce((acc,element)=>{
    return acc + element
    // 0+1=1
    // 1+2=3
    // 3+3=6
    // 6+4=10
    // 10+5=15
    // 15+6=21
    // 21+7=28
    // 28+8=36
    // 36+9=45
    // 45+10=55
}, 0)
console.log(result);

// find max mark from this array using reduce method
// --------------------------------------------------
console.log("----------------------------------------------------------------");

const marks = [57,32,27,78,45,46,18]
const maxmarks = marks.reduce((accumulator, currentvalue)=>{
    return Math.max(accumulator,currentvalue)
},0);
console.log(maxmarks);

// find min value from above array using reduce

console.log("--------------------------------------------------------------------");

const mark = [57,32,27,78,45,46,18]
const minmark = mark.reduce((accumulator, value)=>{
    return Math.min(accumulator,value)
});
console.log(minmark);
