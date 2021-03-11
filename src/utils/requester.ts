import fetch from "node-fetch";

const address = "https://api.bytestobits.dev/";
let token = "";

export async function get(endpoint: string, params?: string) {
  if (params) endpoint + "?" + params
  if(token == "") throw new Error("Authorization token has not been set!")
  return fetch(address+endpoint, {method:"GET", headers: {"Authorization": token}}).then(res => { return res.json().then(body =>{ return body})}).catch(error => {throw new Error(error)})
}

export function setToken(token: string) {
  this.token = token;
}