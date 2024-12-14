// find whetehr a number is prime or not
// prime number = number only divivsible by 1 and only that number
// 2 3  5 7 11 13 17

var count=0;
var num = 17;
for(i=1; i<=num; i++){
    if(num%i===0){
      count++;
    }

}
if(count === 2){
    console.log("The given num is prime");
    
}
else{
    console.log("The given num is not prime");
    
}