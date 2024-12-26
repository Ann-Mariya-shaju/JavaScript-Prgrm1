// for loop
var names = ['Ann','Sharon','Shaju','Viji','Jo','Athira'];
for(var i=0;i<names.length;i++){
   console.log(names[i]);
   
}

//Prgrm to find square of each number in an array

var nums = [1,2,3,4,5];
for(i=0; i<nums.length; i++){
   
    console.log(nums[i]** 2);
    
}

// to get output as an array
var result = [];
for(var i=0; i<nums.length; i++){
    result.push(nums[i]**2)
}
console.log(result);

//print as an array,all the evn number in the beloww array

var num1 = [1,2,3,4,5,6,7]
var res =[];
for(i=0; i<num1.length; i++){
    if(num1[i]%2 === 0){
        res.push(num1[i]);
    }
}
console.log(res);

