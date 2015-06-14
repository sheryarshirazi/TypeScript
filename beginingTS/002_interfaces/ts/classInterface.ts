interface ClockStatic {
    new (hour: number, minute: number);
}

class Clock  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: ClockStatic = Clock;
var newClock = new cs(7, 30);

// interface ClockInterface {
//     new (hour: number, minute: number);
// }

// class Clock implements ClockInterface  {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }