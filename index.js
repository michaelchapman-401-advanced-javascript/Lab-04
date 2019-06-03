'use strict';

const fs = require('fs');

let arr = `'use strict'; \nlet arr = ['Mike', 'Jeff', 'Chloie']; \narr.forEach(item => console.log(item));`.split('');

let writeFile = bitFile => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./files/loop.js', bitFile, (err) => {
      if (err) reject(err);
    });
  });
};

let createBuffer = (array) => {
  // Buffer b
  return new Promise((resolve, reject) => {
    let data = Buffer.from('');

    array.forEach(item => {
      // Buffer a
      data = Buffer.concat([data, Buffer.from(item)]);
    });

    resolve(data);
  });
};

createBuffer(arr)
  .then(data => {
    writeFile(data);
  })
  .catch(console.error);

let stringifyBuffer = (buffer) => {
  let str = '';
  for (let char of buffer) {
    str += String.fromCharCode(char);
  }

  return str;
};

let readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./files/pair-programming.txt', (err, data) => {
      if (err) reject(err);
      resolve(stringifyBuffer(data));
    });
  });
};

let modifyData = (data) => {
  return new Promise((resolve, reject) => {
    let arr = data.split('\n\n');
    let content = [];
    let result = [];
    let comparison = ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.'];

    for (let i = 0; i < arr.length; i++) {
      content.push([arr[i]]);
      for (let j = 0; j < content[i].length; j++) {

        if (comparison.includes(content[i][j][0] + content[i][j][1])) {
          result.push(`<h3>${content[i][j].split('\n')[0]}</h3>`);
          result.push('\n');
          result.push(`<li>${content[i][j].split('.')[1]}</li>`);
          result.push('\n');
          result.push('\n');
        } else if (comparison.includes(content[i][j].split('\n')[1][0] + content[i][j].split('\n')[1][1])) {
          result.push(`<h2>${content[i][j].split('\n')[0]}</h2>`);
          result.push('\n');
          result.push(`<h3>${content[i][j].split('\n')[1]}</h3>`);
          result.push('\n');
          result.push(`<li>${content[i][j].split('.')[2]}</li>`);
          result.push('\n');
          result.push('\n');
        } else {
          result.push(`<h2>${content[i][j].split('\n')[0]}</h2>`);
          result.push('\n');
          result.push(`<li>${content[i][j].split('.')[1]}</li>`);
          result.push('\n');
          result.push('\n');
        }
      }
    }

    resolve(`<article>${result.join('')}</article>`);
  });
};

let writeHTMLFile = bitFile => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./files/index.html', bitFile, (err) => {
      if (err) reject(err);
    });
  });
};

readFile()
  .then(data => {
    modifyData(data)
      .then(info => {
        writeHTMLFile(info);
      });
  });

module.exports = exports = {readFile, createBuffer, modifyData, writeHTMLFile, writeFile};
