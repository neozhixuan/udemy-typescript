"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printName = void 0;
function printName(name) {
    if (name.last != null) {
        return name.first + " " + name.last;
    }
    else {
        return name.first;
    }
}
exports.printName = printName;
