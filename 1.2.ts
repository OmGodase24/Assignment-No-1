
function Area(No1 : number,pi : number):number
{
    var Ans : number = 0
    Ans = pi * No1 * No1
    return Ans
}

var No : number = 5
var PI : number = 3.14

var Ret : number = 0;

Ret = Area(No,PI)

console.log("Area of Circle is:"+Ret)