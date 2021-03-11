"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reddit = void 0;
const requester_1 = require("../utils/requester");
function reddit(subreddit, limit) {
    return requester_1.get("reddit", "limit=" + limit);
}
exports.reddit = reddit;
