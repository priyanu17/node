// require a module
const fs = require('fs');

// read data from file
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textInput);

// const textOut = `This is what info we have \n ${textInput}, Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File is written');

// Asynchronous File read and write
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log('data', data);
});
console.log('Next line of code');
