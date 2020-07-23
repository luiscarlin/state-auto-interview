import { getRandomNumber } from "./getRandomNumber";

export const problem = () => {
  return "hello";
};

export const getSeat = (plane: number[], passenger: number) => {
  if (plane.includes(passenger)) {
    return getRandomNumber(plane.length);
  }
  return passenger;
};
