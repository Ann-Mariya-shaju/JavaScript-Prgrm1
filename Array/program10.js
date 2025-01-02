// fiter()
// --------------------

// filterout only even numbers
const numbers=[1,2,3,4,5,6,7,8,9,10]
const evenNos = numbers.filter((item)=>{
    if(item % 2 ==0){
        return item;
        
    }
})
console.log(evenNos);

// Or using like this
const numbers1=[1,2,3,4,5,6,7,8,9,10]
const evenNum = numbers.filter((item)=>item % 2==0)
console.log(evenNum);

// filterout name start with j
console.log("--------------------- ");
let names=["john","shon","rose","kenneth"]
let startWithJ = names.filter((item)=>item.startsWith('j'));
console.log("names start with j",startWithJ);
