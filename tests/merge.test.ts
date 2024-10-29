import { merge } from '../src/merge';

describe('Merge Function', () => {
    it('sorting three arrays with same n', () => {
        const collection_1 = [1, 6, 9];
        const collection_2 = [2, 3, 10];
        const collection_3 = [5, 2, 3];
        

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 2, 3, 3, 5, 6, 9, 10]);
    });

    it('sorting three arrays with difference n', () => {
        const collection_1 = [1, 6];
        const collection_2 = [2, 3, 10, 9];
        const collection_3 = [5, 2, 3];
        

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 2, 3, 3, 5, 6, 9, 10]);
    });

    it('empty arrays case', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [2, 8, 4, 1];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 4, 8]);
    });

    it('all empty arrays case', () => {
        const result = merge([], [], []);
        expect(result).toEqual([]);
    });
});