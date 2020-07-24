import { mocked } from "ts-jest/utils";
import { fillPlane, getSeat } from "./fillPlane";
import { getRandomNumberFromList } from "./getRandomNumber";

jest.mock("./getRandomNumber");
const getRandomNumberFromListMock = mocked(getRandomNumberFromList);

describe("fillPlane", () => {
  it("sits first passenger on different seat from pre-assigned", () => {
    const plane = fillPlane(5);

    expect(plane[0]).not.toEqual(0);
  });

  it("returns a plane with 100 passengers", () => {
    expect(fillPlane(100).length).toEqual(100);
  });

  describe("getSeat", () => {
    it("returns the pre-assigned seat when available", () => {
      const expectedResult = {
        passenger: 5,
        seat: 5,
        updatedAvailableSeats: [6, 1, 4],
      };

      expect(getSeat([5, 6, 1, 4], 5)).toEqual(expectedResult);
    });

    it("returns a random seat from available seats when pre-assigned seat is not available", () => {
      const expectedResult = {
        passenger: 5,
        seat: 6,
        updatedAvailableSeats: [1, 4],
      };
      getRandomNumberFromListMock.mockReturnValue(6);

      expect(getSeat([6, 1, 4], 5)).toEqual(expectedResult);
    });
  });
});
