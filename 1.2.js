function Area(No1, pi) {
    var Ans = 0;
    Ans = pi * No1 * No1;
    return Ans;
}
var No = 5;
var PI = 3.14;
var Ret = 0;
Ret = Area(No, PI);
console.log("Area of Circle is:" + Ret);
