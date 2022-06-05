// Module Import methods
import * as multiplyModule from "./multiply";
import printer from "./printer";
import {printName} from "./optionalProperties"

// Usually you don't need to define type, as TS infers the type.
let myName = "Alice";
let yourName: string = "John";

// "any" type allows me to access any properties
let obj: any = { x: 0 };
obj = "hello";
console.log(obj);

// Assign a custom type to a custom object
interface User {
  name: string;
  id: number;
}

const user: User = { name: "Hayes", id: 0 };

// Custom type to an object initialisation
class UserAccount {
  name: string;
  id: number;

  // constructor(a:xx, b:xx) is enough. Java is UserAccount(a,b){}
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const user2: User = new UserAccount("John", 1);

// Variable input (string or array) - 2 ways
function getLength(obj: string | string[]): number {
  return obj.length;
}

type ObjectInterface = string | string[];
function getLength2(obj: ObjectInterface): number {
  return obj.length;
} // Note: parameter types and return types are optional (?)

// Generics type definition
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;

// Declare your own types with generics
interface Backpack<T> {
  add: (obj: T) => void;
  get: () => T;
}

declare const backpack: Backpack<String>; // Tells TS there is a const backpack, don't worry about what it is

// const backpackString = backpack.get();
// backpack.add(23) wont work because of generics definition

// Duck/Structural Typing
interface Point {
  x: number;
  y: number;
}
function logPoint(p: Point) {
  p.x = 1;
  p.y = 2;
}
const point = { x: 2, y: 4 }; // Create an object with similar properties
logPoint(point); // This code passes because point has same "shape   "

// Literal types and how you can use union to make the parameter flexible
interface Options{
    width:number;
}

function configure(option:Options | "auto"){
    //...
}
var option1 = {width: 5};
configure(option1);
configure("auto");
// configure("hello") will fail

// Testing ground ////////////////////////////////////////
const a = 4;
const b = 6;
const word = "spiderman";
const name = {first:"John", last:"Cena"}

// Length of this array is 2
const words = ["wassup", "everyone"];

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`);
console.log(`${word} backwards is ${printer(word)}`);
console.log(`Length of input is ${getLength(words)}`);
console.log(`Length of input is ${getLength2(word)}`);
console.log(`And his name is ${printName(name)}`)