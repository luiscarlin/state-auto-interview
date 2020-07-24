import { mocked } from "ts-jest/utils";
import { fillPlane } from "./fillPlane";
import { simulate } from "./simulate";

jest.mock("./fillPlane");
const fillPlaneMock = mocked(fillPlane);

describe("simulate", () => {
  it("returns 1 when last passenger in plane sat on pre-assigned seat", () => {
    fillPlaneMock.mockReturnValue([1, 0, 2]);

    expect(simulate(1)).toBe(1);
  });

  it("returns 0 when last passenger in plane did NOT sit on pre-assigned seat", () => {
    fillPlaneMock.mockReturnValue([2, 0, 1]);

    expect(simulate(1)).toBe(0);
  });

  it("runs mutiple generations and returns probability of last passenger sitting in correct seat ", () => {
    fillPlaneMock.mockClear();
    fillPlaneMock.mockReturnValueOnce([1, 0, 2]);
    fillPlaneMock.mockReturnValueOnce([2, 0, 1]);

    const result = simulate(2);

    expect(fillPlaneMock).toHaveBeenCalledTimes(2);

    expect(result).toEqual(0.5);
  });
});
