import { getRandomNumberFromList } from "./getRandomNumber";

describe("getRandomNumberFromList", () => {
  it("returns a random number from a list", () => {
    Math.random = jest.fn(() => 0.5);
    expect(getRandomNumberFromList([1, 4, 5])).toEqual(4);
  });
});
