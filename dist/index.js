"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module Import methods
const multiplyModule = __importStar(require("./multiply"));
const printer_1 = __importDefault(require("./printer"));
const optionalProperties_1 = require("./optionalProperties");
// Usually you don't need to define type, as TS infers the type.
let myName = "Alice";
let yourName = "John";
// "any" type allows me to access any properties
let obj = { x: 0 };
obj = "hello";
console.log(obj);
const user = { name: "Hayes", id: 0 };
// Custom type to an object initialisation
class UserAccount {
    // constructor(a:xx, b:xx) is enough. Java is UserAccount(a,b){}
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("John", 1);
// Variable input (string or array) - 2 ways
function getLength(obj) {
    return obj.length;
}
function getLength2(obj) {
    return obj.length;
} // Note: parameter types and return types are optional (?)
function logPoint(p) {
    p.x = 1;
    p.y = 2;
}
const point = { x: 2, y: 4 }; // Create an object with similar properties
logPoint(point); // This code passes because point has same "shape   "
function configure(option) {
    //...
}
var option1 = { width: 5 };
configure(option1);
configure("auto");
// configure("hello") will fail
// Testing ground ////////////////////////////////////////
const a = 4;
const b = 6;
const word = "spiderman";
const name = { first: "John", last: "Cena" };
// Length of this array is 2
const words = ["wassup", "everyone"];
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`);
console.log(`${word} backwards is ${(0, printer_1.default)(word)}`);
console.log(`Length of input is ${getLength(words)}`);
console.log(`Length of input is ${getLength2(word)}`);
console.log(`And his name is ${(0, optionalProperties_1.printName)(name)}`);
