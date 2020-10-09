import { expect } from "chai";
import "mocha";
import { calcHouseMaterials, getHouseMaterials } from "../src/calculator";


describe("calculator", () => {
    it("should return specified parameters", () => {
        const result = calcHouseMaterials(8, 8, true, "tyler");
        expect(result).to.equal('width, length, units, name');
    });
});

describe("Auditor", () => {
    it("should return the name of customer", () => {
        const result = getHouseMaterials("tyler");
        expect(result).to.equal('name');
    });
});