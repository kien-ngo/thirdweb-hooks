"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const useNFT_1 = require("./nft/useNFT");
const hello = (name) => "Hello, " + name + "!";
exports.hello = hello;
module.exports = {
    useNFT: useNFT_1.useNFT,
};
