import { getRandomNumber } from "./getRandomNumber";

export const getSeat = (plane: number[], passenger: number) => {
  if (plane.includes(passenger)) {
    return getRandomNumber(plane.length - 1);
  }
  return passenger;
};
