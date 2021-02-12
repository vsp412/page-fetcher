const request = require('request');
const fs = require('fs');

const readline = require('readline'); 
// const w = () => {

  

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const d = process.argv;
let w = d.slice(2);

const write = (w, content) => {
  fs.writeFile(`./${w}`, content, (err) => {  
    if (err) {
      return console.log('Error writing file')
    } else {
      return console.log(`${content.length} bytes written to ${w}`)
    }
  });
}


const q = request(w[0], (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode ); 
  console.log('body:', body.length); 
  if (error !== null) {   
    console.log("The resource not found");
  } else {
    fs.readFile(`./${w[1]}`, 'utf8', (erro) => {
      if (erro) {  
        write(w[1], body);
        process.exit(); 
      } else {
        console.log("sorry it exists");
        rl.question('provide input: ', (a) => {
          if (a === 'Y') {
            write(w[1], body);   
          } 
          rl.close();
          process.exit();
        });
      }
    });
  }   
});

q;