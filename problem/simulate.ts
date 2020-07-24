import { fillPlane } from "./fillPlane";

export const simulate = (generations: number) => {
  let timesLastPassengerIncorrectSeat = 0;

  for (let generation = 0; generation < generations; generation += 1) {
    const plane = fillPlane();

    if (isLastPassengerInCorrectSeat(plane)) {
      timesLastPassengerIncorrectSeat += 1;
    }
  }

  return timesLastPassengerIncorrectSeat / generations;
};

const isLastPassengerInCorrectSeat = (plane: number[]) => {
  return plane[plane.length - 1] === plane.length - 1;
};
