const http = require('http');
const url = require('url');
const dt = require('./dateandtime');
const datafetcher = require('./project/datafetcher').datafetcher;

http.createServer(async function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  try {
    if (req.url == "/about") {
      const data = await datafetcher("about.html");
      res.write(data + dt.myDateTime());
    } else if (req.url == "/index") {
      const data = await datafetcher("index.html");
      res.write(data + dt.myDateTime());
    } else if (req.url == "/contact") {
      const data = await datafetcher("contact.html");
      res.write(data + dt.myDateTime());
    } else {
      const data = await datafetcher("404.html");
      res.write(data + dt.myDateTime());
    }
  } catch (err) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.write('Internal Server Error');
    console.error(err);
  }

  res.end();
}).listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
