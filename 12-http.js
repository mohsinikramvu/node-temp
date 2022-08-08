const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end("Welcome to our about page");
    } else {
        res.end("Not Found!");
    }
}).listen(2000);
