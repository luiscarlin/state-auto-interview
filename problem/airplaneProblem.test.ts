import { getSeat } from "./airplaneProblem";

describe("airplane problem", () => {
  describe("getSeat", () => {
    it("getSeat returns the designated seat when not in use", () => {
      expect(getSeat([-1, -1, -1], 1)).toEqual(1);
    });
  });
});
