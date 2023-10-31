class Robot {
    identify(id: number) {
        console.log(`Beeps ${id}`);
    }
}

const myRobot = new Robot();
myRobot.identify(100);