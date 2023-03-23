import sumString from "../src/sumString";

describe('sumString', () => {
    it("should return the sum of the numbers present into a string", () => {
        expect(sumString('Sono 1 stringa di 6 parole')).toBe(7);
    })
})