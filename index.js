// require a module
const fs = require('fs');

// read data from file
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textInput);

// const textOut = `This is what info we have \n ${textInput}, Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File is written');

// Asynchronous file read and write
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log('data', data);
});
console.log('Next line of code');

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  console.log('data 1 : ', data1);
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log('data 2 : ', data2);

    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log('data 3 : ', data3);
      fs.writeFile(
        './txt/final.txt',
        `${data1}\n${data2}\n${data3}`,
        'utf-8',
        (err) => {
          err && console.log('Any error : ' + err);
          console.log('Your file is written');
        }
      );
    });
  });
});
