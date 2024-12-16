// 1
// 1 2
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

for (i = 1; i <= 5; i++) {
    //i<=5 ennu parayunnadhu ee patternil ethra line undo adhanu
    var str = "";
    for (j = 1; j <= i; j++) {
        // idhu oro linilum ethra item venam
        str = str + j + ' '
    }
    console.log(str);

}

// *
// * *
// * * *
// * * * *

for (i = 1; i <= 4; i++) {
    var str1 = ""
    for (j = 1; j <= i; j++) {
        str1 = str1 + ' * '
    }
    console.log(str1);

}
// * * * * *
// * * * * *
// * * * * *

for (i = 1; i <= 3; i++) {
    var str = ""
    for (j = 1; j <= 5; j++) {
        str = str + ' * '
    }
    console.log(str);

}



// * * * *
// * * *
// * *
// *
console.log("--------------");
for (i = 4; i >= 1; i--) {
    var str = ""
    for (j = 1; j <= i; j++) {
        str = str + ' * '

    }
    console.log(str);
}

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// 5 5 5 5

console.log("--------------");
for (i = 1; i <= 5; i++) {
    var str = ""
    for (j = 1; j <= 4; j++) {
        str = str + i + ' '
    }
    console.log(str);

}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for(i=1; i<=5;i++){
    var str="";
    for(j=1; j<=i;j++){
        str= str+i+' ';
    }
    console.log(str);
    
}

// *
// * *
// * * *
// * * * *
// * * * * *

// * * * *
// * * *
// * *
// *


