const { readFile, writeFile } = require('fs');

readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result)=> {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/result-async.txt", `This is the result of first and second text files : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});