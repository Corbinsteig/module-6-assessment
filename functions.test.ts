const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray([1,2,3,4]))).toBe(true);
    })
    test('return same length as array', () => {
        expect(shuffleArray([1,2,3,4]).length).toBe([1,2,3,4].length);
    })
})