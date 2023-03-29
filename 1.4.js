function ChkPrime(No1) {
    var iCnt = 0;
    if (No1 == 2) {
        return true;
    }
    for (iCnt = 2; iCnt <= No1 / 2; iCnt++) {
        if (No1 % iCnt != 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
var no1 = 11;
var iRet = true;
iRet = ChkPrime(no1);
if (iRet == true) {
    console.log("This is prime number");
}
else {
    console.log("This is not a prime number");
}
