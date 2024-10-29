"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const merged = [];
    let i = 0, j = 0, k = collection_3.length - 1;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            merged.push(collection_1[i]);
            i++;
        }
        else {
            merged.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        merged.push(collection_1[i]);
        i++;
    }
    while (j < collection_2.length) {
        merged.push(collection_2[j]);
        j++;
    }
    while (k >= 0) {
        merged.push(collection_3[k]);
        k--;
    }
    const sorted = [];
    for (const num of merged) {
        let pos = sorted.length;
        while (pos > 0 && sorted[pos - 1] > num) {
            pos--;
        }
        sorted.splice(pos, 0, num);
    }
    return sorted;
}
