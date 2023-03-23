import transformName from "../src/transformName";

describe('transformName', () => {
    it('should return a string with the initials followed by the dot', () => {
        expect(transformName('Tizio Caio')).toBe('T.C.');
    })
})