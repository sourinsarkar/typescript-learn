interface RobotI {
    identify: (id: number) => void;
}

class Robot implements RobotI {
    identify(id: number) {
        console.log(`Beeps ${id}`);
    }
}

const myRobot = new Robot();
myRobot.identify(100);