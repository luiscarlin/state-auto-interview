import { getRandomNumber } from "./getRandomNumber";

describe("getRandomNumber", () => {
  it("returns a random number between 0 and passed in number", () => {
    Math.random = jest.fn(() => 0.5);
    expect(getRandomNumber(4)).toEqual(2);
  });
});
