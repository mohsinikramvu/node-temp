const { readFileSync, writeFileSync, write, writeFile } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync("./content/result-sync.txt", `This is the result of first and second text files : ${first}, ${second}`, { flag: 'a'});