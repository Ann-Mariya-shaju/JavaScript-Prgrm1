
//new Date() is an inbuild method in 25 to obtain current date.
var todaysdate = new Date()
console.log("Today date is:", todaysdate);

var today = new Date().getDay()
console.log(today);

// else if ladder
if (today === 0) {
    console.log("Today is sunday");

}
else if (today === 1) {
    console.log("Today is monday");

}

else if (today === 2) {
    console.log("Today is tuesday");

}

else if (today === 3) {
    console.log("Today is wednesday");

}

else if (today === 4) {
    console.log("Today is thursday");

}

else if (today === 5) {
    console.log("Today is friday");

}

else if (today === 6) {
    console.log("Today is saturday");

}

else {
    console.log("Something Went Wrong");

}

// second example

var age = 2;
if (age <= 3) {
    console.log("Baby");

}
else if (age <= 8) {
    console.log("Kid");

}

else if (age <= 14) {
    console.log("Infent");

}

else if (age <= 18) {
    console.log("Minor");

}

else {
    console.log("Senior");

}

