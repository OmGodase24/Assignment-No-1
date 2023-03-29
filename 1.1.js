function Maximum(no1, no2, no3) {
    if (no1 > no2 && no1 > no3) {
        return no1;
    }
    else if (no2 > no1 && no2 > no3) {
        return no2;
    }
    else {
        return no3;
    }
}
var No1 = 23;
var No2 = 89;
var No3 = 6;
var Ret = 0;
Ret = Maximum(No1, No2, No3);
console.log("The Maximum Number is:" + Ret);
