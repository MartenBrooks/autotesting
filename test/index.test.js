#!/usr/bin/env node


import capitalize from "../bin/index.js";

if (capitalize('hello') !== 'Hello') {
    throw new Error("Function doesn't work right!");
}
if (capitalize('') !== '') {
    throw new Error("Function doesn't work right! #Empry string");
}