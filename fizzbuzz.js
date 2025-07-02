const readline = require('readline-sync');
console.log("enter top bound: ");
const count = readline.prompt();
for (i = 1; i <= count; i++) {
    let strf = new Array();
    let strb = new Array();
    if (i % 3 == 0) {
        strf.push("fizz");
    }
    if (i % 5 == 0) {
        strb.push("buzz");
    }
    if (i%7 == 0) {
        strb.push("bang");
    }
    if (i%11 == 0) {
        strf = [];
        strb = ["bong"];
    }
    if (i%13 == 0){
        strf.push("fezz");

    }
    let str = new Array();
    str = strf.concat(strb);
    if (i%17 == 0) {
        str.reverse();
    }
    if (str.length == 0){
        str = [i];
    }
    console.log(str.reduce((acc, cur) => acc + cur, ""));
}