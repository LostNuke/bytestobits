<div align="center">
<h1> bytesToBitsAPI</h1>
  <br>
  <a href="https://www.npmjs.com/package/bytestobits"><img alt="npm" src="https://img.shields.io/npm/v/bytestobits"> </a>
  <a href="https://api.bytestobits.dev/"><img alt="Docs" src="https://img.shields.io/badge/Docs-ff69b4"> </a>
</div>

# How to Use
```js
const btb = require("bytestobits");
btb.setToken("TOKEN");

async function command() {
  await word();
}
```
Before you do any requests, you **HAVE** to set your Token otherwise you will get an error!
**You may only do 50 requests in a minute, if you go over that limit multiple times you might get banned from the API**

### Questions
If you have any questions about the API join the [BtB Discord](https://discord.gg/NtsATbHW6b) or look [here](https://api.bytestobits.dev/)

## Methods
```js
async lyrics(song: string)
```
The lyrics method gets the lyrics endpoint of BtB! It returns a json with these values:
title -> string
artist -> string
lyrics -> string

**IF** if errors, the json will only contain:
GeniusError -> string


```js
async madlibs()
```
The madlibs function gets the madlibs endpoint of BtB, it returns you a json with:
title -> string
variables -> string[]
text -> string
questions -> number


```js
async meme()
```
returns:
title -> string
url -> string
link -> string
subreddit -> string
upvotes -> number
downvotes -> number
comments -> number


```js
reddit(subreddit: string, limit?: number)
```
returns:
title -> string
url -> string
link -> string
subreddit -> string
upvotes -> number
downvotes -> number
comments -> number
text -> string


```js
async text()
```
returns a String


```js
async word()
```
returns a string
