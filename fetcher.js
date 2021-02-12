const request = require('request');
const fs = require('fs');

const d = process.argv;
let w = d.slice(2);

request(w[0], (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode ); 
  console.log('body:', body.length); 
  if (error !== null) {
    
    console.log("The resource not found");
  } else {
    fs.writeFile(`./${w[1]}`, body, (err) => {
        if (err) {
          console.log('Error writing file')
        } else {
          console.log(`${body.length} bytes written to ${w[1]}`)
        }
    });
  }
  // if ()
  // fs.writeFile(`./${w[1]}`, body, (err) => {

  // })
    
});