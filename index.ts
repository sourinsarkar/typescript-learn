interface RobotI {
    identify: (id: number) => void;
}

class Robot implements RobotI {
    identify(id: number) {
        console.log(`Beeps ${id}`);
    }
}

const myRobot1: RobotI = new Robot();
myRobot1.identify(100);

