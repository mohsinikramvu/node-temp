const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The System current uptime is ${os.uptime()} seconds`);


const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);