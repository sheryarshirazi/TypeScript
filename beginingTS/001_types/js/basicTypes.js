// variables types
// # 1 boolean
var isItSummer = true;
// # 2 string
var webAddres = 'www.technoserves.com';
// # 3 number
var noOfMonths = 12;
var noOfDays = 365.25;
// # 4 array
var friends = ["Muhammad Hashim", "Shazim"];
// # 5
// an enum is a way of giving more friendly names to sets of numeric values.
var RainbowColor;
(function (RainbowColor) {
    RainbowColor[RainbowColor["red"] = 0] = "red";
    RainbowColor[RainbowColor["orange"] = 1] = "orange";
    RainbowColor[RainbowColor["yellow"] = 2] = "yellow";
    RainbowColor[RainbowColor["green"] = 3] = "green";
    RainbowColor[RainbowColor["blue"] = 4] = "blue";
    RainbowColor[RainbowColor["indigo"] = 5] = "indigo";
    RainbowColor[RainbowColor["violet"] = 6] = "violet";
})(RainbowColor || (RainbowColor = {}));
;
var myFav_rainbowColor = RainbowColor.green;
// this statement is also true 
// myFav_rainbowColor = 12;
// Enum itself represent by number.
// so statement in if's condition is like 3 == 3
// because myFav_rainbowColor currently store 3 and RainbowColor.green represents 3.
if (myFav_rainbowColor == RainbowColor.green) {
    //We can also get the value of the enum
    console.log('you are Sheryar and your favourite color in rainbow is ' + RainbowColor[myFav_rainbowColor]);
}
else {
    console.log('you are not sheryar');
}
// # 6
// The variable of type 'any' can store all above 5 types and even functions, object ... .
// it`s type is check at the compile time.
var dynamicVar;
dynamicVar = 1;
dynamicVar = 'string';
dynamicVar = true;
dynamicVar = friends;
dynamicVar = RainbowColor;
dynamicVar = function () {
    //now dynamicVar hold an object
    dynamicVar = {};
};
// array of any time would behave as an list. Like list is an array that has multiple type values.
var mixDataList = [1, 'string', true, friends, RainbowColor, dynamicVar];
// # 7
// the variable void type can not store a value
var restrict;
var nothing;
nothing = null;
function distinguish() {
    if (typeof (restrict) == typeof (nothing)) {
        console.log('You did some mistake.');
    }
    else {
        console.log('both are different.');
        console.log('restrict type : ' + typeof (restrict));
        console.log('nothing type : ' + typeof (nothing));
    }
}
distinguish();
//# sourceMappingURL=../ts/map/basicTypes.js.map