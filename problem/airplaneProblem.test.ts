import { mocked } from "ts-jest/utils";
import { getSeat } from "./airplaneProblem";
import { getRandomNumber } from "./getRandomNumber";

jest.mock("./getRandomNumber");
const getRandomNumberMock = mocked(getRandomNumber);

describe("airplane problem", () => {
  describe("getSeat", () => {
    it("getSeat returns the designated seat when not in use", () => {
      expect(getSeat([-1, -1, -1], 1)).toEqual(1);
    });

    it("getSeat returns a random seat when seat is already taken", () => {
      getRandomNumberMock.mockReturnValue(2);

      const seat = getSeat([1, -1, -1], 1);
      expect(getRandomNumber).toHaveBeenCalledWith(2);
      expect(seat).toEqual(2);
    });
  });
});
