function DisplayFactors(No1) {
    var iCnt = 0;
    console.log("The factors are:");
    for (iCnt = 0; iCnt <= No1 / 2; iCnt++) {
        if (No1 % iCnt == 0) {
            console.log(iCnt);
        }
    }
}
var no1 = 20;
DisplayFactors(no1);
