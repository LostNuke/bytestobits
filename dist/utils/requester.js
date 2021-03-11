"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = exports.get = void 0;
const node_fetch_1 = require("node-fetch");
const address = "https://api.bytestobits.dev/";
let token = "";
async function get(endpoint, params) {
    if (params)
        endpoint + "?" + params;
    if (token == "")
        throw new Error("Authorization token has not been set!");
    return node_fetch_1.default(address + endpoint, { method: "GET", headers: { "Authorization": token } }).then(res => { return res.json().then(body => { return body; }); }).catch(error => { throw new Error(error); });
}
exports.get = get;
function setToken(token) {
    this.token = token;
}
exports.setToken = setToken;
