// reverse a number using while loop
var reversenum = 0;
var num = 567;
while(num>0) {
    var remainder = num %10;
    reversenum = reversenum * 10 +remainder;
    num=Math.floor(num/10);
}
console.log(reversenum);


