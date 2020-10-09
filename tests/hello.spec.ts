import { hello } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("Hello function", () => {
    it("should return Hello", () => {
        const result = hello();
        expect(result).to.equal("Hello");
    });
});