"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meme = void 0;
const requester_1 = require("../utils/requester");
function meme() {
    return requester_1.get("meme");
}
exports.meme = meme;
