import { getType, validateSide } from "./Triangle";

describe("Triangle", () => {
  // The following functions need a test DOM/headless browser set up
  // in order to be able to be tested
  // @todo init tests
  // @todo triangleInputBlur tests
  // @todo Triangle tests
  // @todo displayValidationMessage tests
  // @todo displayResults tests
  // @todo processForm tests

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

  describe("validateSide", () => {
    it("should return false when not a number", () => {
      expect(validateSide("invalid example")).toEqual(false);
    });
    it("should return false when negative number", () => {
      expect(validateSide("-1")).toEqual(false);
    });
    it("should return length when a positive number", () => {
      expect(validateSide("1")).toEqual(1);
    });
  });
});
