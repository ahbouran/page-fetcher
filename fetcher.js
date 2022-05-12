const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => {
  //console.log('body:', body)
  const message = `Downloaded and saved ${body.length} bytes to ${args[1]}`;
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(message);
    }
  });
});