const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 1000; // Default port 3000

const server = http.createServer((req, res) => {
    // Load the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
