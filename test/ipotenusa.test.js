import ipotenusa from "../src/ipotenusa";
describe("ipotenusa", () => {
    it("Calculate the hypotenuse of a right triangle", () => {
        expect(ipotenusa(3, 4)).toBe(5);
    })
}) 