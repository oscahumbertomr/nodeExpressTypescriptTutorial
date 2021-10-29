// npm i @types/node
import * as os from 'os';

console.log(os.userInfo())
console.log(os.hostname())
console.log('')
console.log('')
console.log('')

interface osSpects {
  name? :string,
  realice? :string,
  totalMem? :number,
  freeMem? :string,
}

let mySpects : osSpects;
mySpects = {
  name : os.type(),
  realice : os.release(),
  totalMem : os.totalmem(),
  freeMem : os.release(),

}

console.log(mySpects)