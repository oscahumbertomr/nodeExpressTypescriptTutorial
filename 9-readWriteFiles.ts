// tsc .\app.ts 
// https://youtu.be/Oe421EPjeBE?t=4238

// import * as fs from 'fs';
import {readFileSync,writeFileSync} from 'fs';

let firstFile = readFileSync('./content/first.txt','utf8');
let secondFile = readFileSync('./content/subfolder/test.txt','utf8');

writeFileSync('./content/result-sync.txt',`Here is the result: \n${firstFile}\n${secondFile}`,{flag:'a'})

console.log(firstFile,'\n',secondFile)