console.log("hi");
for (i = 1; i < 100; i++) {
    let str = "";
    if (i % 5 == 0 && i%3 == 0) {
        str = "fizzbuzz";
    }
    else if (i % 5 == 0) {
        str = "buzz";
    }
    else if (i % 3 == 0) {
        str = "fizz";
    }
    if (i%7 == 0) {
        str = str + "bang";
    }
    if (str == ""){
        str = i;
    }
    console.log(str);
}