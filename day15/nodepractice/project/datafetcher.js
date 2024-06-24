const http = require('http');
const fs = require('fs');
const path = require('path');

// http.createServer(function (req, res) {
//   const filePath = path.join(__dirname, 'index.html'); // Ensure the file path is correct

//   fs.readFile(filePath, function(err, data) {
//     if (err) {
//       // Handle error, e.g., file not found or read error
//       res.writeHead(500, {'Content-Type': 'text/plain'});
//       res.write('Internal Server Error');
//       res.end();
//       console.error(err); // Log the error for debugging purposes
//     } else {
//       // Serve the file content
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
   
//     }
//   });
// }).listen(8000, () => {
//   console.log('Server running at http://localhost:8000/');
// });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');


//  exports.datafetcher =  function(pagename){
//     const filePath = path.join(__dirname, pagename); // Ensure the file path is correct

//     fs.readFile(filePath, function(err, data) {
//         a=data.toString()
//         console.log( a)
//         return a;
//       if (err) {
//         // Handle error, e.g., file not found or read error
//         // res.writeHead(500, {'Content-Type': 'text/plain'});
//         // res.write('Internal Server Error');
//         // res.end();
//         // console.error(err); // Log the error for debugging purposes
//       } else {
//         // Serve the file content
//         // res.writeHead(200, {'Content-Type': 'text/html'});
//         // res.write(data);
//         // res.end();
//         return  a
//       }
//     });
// }

exports.datafetcher = function(pagename) {
    const filePath = path.join(__dirname, pagename); // Ensure the file path is correct
  
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.toString()); // Convert Buffer to string
        }
      });
    });
  };