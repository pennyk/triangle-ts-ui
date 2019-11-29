import { Triangle, getType } from "./Triangle";

describe("Triangle", () => {
  describe("getType", () => {
    it("should accept valid triangle input when valid mixed number types are used", () => {
      expect(getType(1, 1.0, 1.00)).toEqual("equilateral");
    });
    it("should display Equilateral message when sides X, Y, and Z match", () => {
      expect(getType(4,4,4)).toEqual("equilateral");
    });
    it("should display Isosceles message when sides X and Y match", () => {
      expect(getType(4,4,5)).toEqual("isosceles");
    });
    it("should display Isosceles message when sides X and Z match", () => {
      expect(getType(4,5,4)).toEqual("isosceles");
    });
    it("should display Isosceles message when sides Y and Z match", () => {
      expect(getType(5,4,4)).toEqual("isosceles");
    });
    it("should display Scalene message when no sides match and triangle is valid", () => {
      expect(getType(3,4,5)).toEqual("scalene");
    });
  });
  // @todo init tests
  // @todo triangleInputBlur tests
  // @todo Triangle tests
  // @todo displayValidationMessage tests
  // @todo displayResults tests
  // @todo processForm tests
  // @todo validateSide tests
});
