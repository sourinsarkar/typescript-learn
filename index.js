var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.identify = function (id) {
        console.log("Beeps ".concat(id));
    };
    return Robot;
}());
var myRobot1 = new Robot();
myRobot1.identify(100);
