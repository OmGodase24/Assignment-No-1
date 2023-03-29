function Fibonacci(No1) {
    var iCnt1 = 0;
    var iCnt2 = 1;
    var iSum = 0;
    console.log(iCnt2);
    for (var i = 0; i <= No1; i++) {
        iSum = iCnt1 + iCnt2;
        iCnt1 = iCnt2;
        iCnt2 = iSum;
        console.log(iSum);
        if (iSum == No1) {
            break;
        }
    }
}
var no1 = 21;
Fibonacci(no1);
