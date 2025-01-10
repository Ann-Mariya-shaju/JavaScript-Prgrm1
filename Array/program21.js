// check whether the string is palindrome or not
var str ='malayalam'
var str_array = str.split()
console.log(str_array);
var reverse_array = str_array.reverse()
 console.log(reverse_array);
const res = reverse_array.join('');
 console.log(res);
 if(str === res){
    console.log(`${res} is palindrome`);
    
}
 else{
     console.log("not a palindrome");
    
}