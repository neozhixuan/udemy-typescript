"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printer(word) {
    var reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse;
}
exports.default = printer;
