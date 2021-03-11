"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lyrics = void 0;
const requester_1 = require("../utils/requester");
function lyrics(song) {
    return requester_1.get("text", "song=" + song.split(" ").join("+"));
}
exports.lyrics = lyrics;
