// linear search on string array

let fruits=['apple','orange','kiwi','mango','pineapple','guava','banana'];
let target = 'mango';

function findFruit(arr, myTarget){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===myTarget){
            return i;

        }
    }
    return - 1;
}
const result = findFruit(fruits, target)
 
if(result === -1 ){
    console.log("Fruit not found in the given array");
    
}
else{
    console.log(`Fruit found at index ${result}`);
    
}
