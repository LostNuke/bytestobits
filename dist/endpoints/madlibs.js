"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.madlibs = void 0;
const requester_1 = require("../utils/requester");
function madlibs() {
    return requester_1.get("madlibs");
}
exports.madlibs = madlibs;
