// import * as fs from 'node:fs/promises';
//We need to wite await before every fs function as they are async functions and we need to wait for them to complete before moving to next line of code, otherwise it will throw error, as pending promise is returned by async function and we are trying to access it before it is resolved.


//writeFile:
// await fs.writeFile('hello.txt', 'Hello, world!').then(() => {
//   console.log('File written!');
// });


//appendFile:
// fs.readFile('notes_3.txt',"utf-8").then((data) => {
//   console.log(data);
// });


// unlink:
// await fs.unlink('hello.txt').then(() => {
//   console.log('File deleted!');
// });

import url from 'node:url';
const myURL =
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.protocol);