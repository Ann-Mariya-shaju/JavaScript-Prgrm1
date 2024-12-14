//find whether number is palindrome or not using while
var reversenum = 0;
var num = 3553;
var tempnum= num;
while(num>0) {
    var remainder = num %10;
    reversenum = reversenum * 10 +remainder;
    num=Math.floor(num/10);
}

if(tempnum===reversenum){
console.log(`${tempnum}num is a palindrome `);

}
else{
    console.log(`${tempnum}num is not a palindrome `);
    
}
