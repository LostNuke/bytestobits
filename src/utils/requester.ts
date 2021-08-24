import fetch from "node-fetch";

const address = "https://api.bytestobits.dev/";
let token = "";

export function get(endpoint: string, params?: string) {
  if (!token) throw new Error("Authorization token has not been set!");
  if (params) endpoint += "?" + params;
  return new Promise((resolve, reject) => {
    fetch(address + endpoint, {
      headers: { Authorization: token },
    })
      .then((res) => res.json().then(body => resolve(body)))
      .catch((error) => reject(error));
  });
}

export function setToken(pToken: string) {
  token = pToken;
}