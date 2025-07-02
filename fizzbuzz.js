const readline = require('readline-sync');



console.log("enter top bound: ");
const count = readline.prompt();
console.log("enter rules (from 3, 5, 7, 11, 13, 17)");
const rules = readline.prompt();
// rules.split(" ");

for (i = 1; i <= count; i++) {
    let strf = new Array();
    let strb = new Array();
    if (i % 3 == 0 && rules.includes("3")) {
        strf.push("fizz");
    }
    if (i % 5 == 0 && rules.includes("5")) {
        strb.push("buzz");
    }
    if (i%7 == 0 && rules.includes("7")) {
        strb.push("bang");
    }
    if (i%11 == 0 && rules.includes("11")) {
        strf = [];
        strb = ["bong"];
    }
    if (i%13 == 0 && rules.includes("13")){
        strf.push("fezz");

    }
    let str = new Array();
    str = strf.concat(strb);
    if (i%17 == 0 && rules.includes("17")) {
        str.reverse();
    }
    if (str.length == 0){
        str = [i];
    }
    console.log(str.reduce((acc, cur) => acc + cur, ""));
}