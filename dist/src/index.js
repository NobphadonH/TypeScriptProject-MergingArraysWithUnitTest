"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const collection_1 = [1, 6, 9];
const collection_2 = [2, 3, 10];
const collection_3 = [7, 2, 5, 3];
const sortedArr = (0, merge_1.merge)(collection_1, collection_2, collection_3);
console.log(sortedArr);
