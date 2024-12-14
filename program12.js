//print 1 to 10 using for loop

for(var i=1; i<=10; i++){
    console.log(i);
    
    
}
console.log("---------------------");
//print 10 to 1
for(var i=10; i>=1; i--){
console.log(i);
}

// factorial using for loop

var i=1;
var n=5;
var result=1;
for(i=1; i<=n; i++){
    result=result*i;
   
}
console.log(`factorial of number is: ${result}`);