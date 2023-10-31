var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.identify = function (id) {
        console.log("Beeps ".concat(id));
    };
    return Robot;
}());
var myRobot = new Robot();
myRobot.identify(100);
