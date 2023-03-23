import fibonacci from "../src/fibonacci";

describe('fibonacci', () => {
    it("should return succession fibonacci", () => {
        expect(fibonacci(9)).toEqual([1,1,2,3,5,8,13,21,34]);
    })
})