"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = void 0;
const requester_1 = require("../utils/requester");
function text() {
    return requester_1.get("text");
}
exports.text = text;
