const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
  let getUrl = url.parse(req.url, true);
  if (getUrl.pathname === '/') {
    console.log("helo");
    fs.readFile(`${__dirname}/template/index.html`, (err, data) => {
      if (err) {
        fs.readFile(`${__dirname}/template/404.html`, (err, data) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end(data);
        })
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    let filename = `${__dirname}/template` + getUrl.pathname + '.html';
    fs.readFile(filename, (err, data) => {
      if (err) {
        console.log('EWWROOR');
        fs.readFile(`${__dirname}/template/404.html`, (err, data) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write(data);
          return res.end();
        })
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      }
    });
  }

}).listen(8080); 