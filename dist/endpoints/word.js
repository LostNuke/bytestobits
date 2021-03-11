"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.word = void 0;
const requester_1 = require("../utils/requester");
function word() {
    return requester_1.get("word");
}
exports.word = word;
