console.log("hi");
for (i = 1; i <= 100; i++) {
    let strf = "";
    let strb = "";
    if (i % 3 == 0) {
        strf = "fizz";
    }
    if (i % 5 == 0) {
        strb = "buzz";
    }
    if (i%7 == 0) {
        strb = strb + "bang";
    }
    if (i%11 == 0) {
        strf = "";
        strb = "bong";
    }
    if (i%13 == 0){
        strf = strf + "fezz";

    }
    let str = "";
    str = strf + strb;
    if (str == ""){
        str = i;
    }
    console.log(str);
}