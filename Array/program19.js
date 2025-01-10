// uppercase and lowercase
// ------------------------------


let firstName = 'Ann'
console.log(firstName.toUpperCase());
let lastName = 'Mariya'
console.log(lastName.toLowerCase());


// trim
// ------------------------------------

let sample = '                  Hello World       ';
console.log(sample.trim());

// startswith and endswith
// -------------------------------
let sample2='hi how are you'
console.log(sample2.startsWith(' Hi h'));
console.log(sample2.startsWith('hi'));
console.log(sample2.endsWith('you'));

// includes
// ----------------------
console.log("----------------------------------");

console.log(sample2.includes('w'));

// charAt(index)
// ----------------------
console.log("----------------------------------");
console.log(sample2.charAt(4));


// concat
// ----------------
let str1='hi'
let str2='hello'
let result=str1.concat(str2)
console.log(result);
