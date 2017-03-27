const fs = require('fs');

function handler(req, res) {
    fs.readFile(`${__dirname}/index.html`,
    (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
}

const app = require('http').createServer(handler);

app.listen(8080);
