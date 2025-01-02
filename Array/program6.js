// binary search
// -------------------------

const sortedArray = [10,20,30,40,50,60,70,80,90,100]
const targetValue = 900;

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        const mid = Math.floor((left + right)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(target>arr[mid])
            {
                left = mid + 1;

        }
        else{
            right=mid - 1;
        }
    }
    return -1;
}
const result = binarySearch(sortedArray,targetValue)
if(result === -1){
    console.log("target item not found");
    
}
else{
    console.log(`target found at index ${result}`);
    
}