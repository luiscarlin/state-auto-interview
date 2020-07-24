import { fillPlane } from "./fillPlane";

export const simulate = (generations: number) => {
  let timesLastPassengerCorrectSeat = 0;

  for (let generation = 0; generation < generations; generation += 1) {
    const plane = fillPlane(100);

    if (isLastPassengerInCorrectSeat(plane)) {
      timesLastPassengerCorrectSeat += 1;
    }
  }

  return timesLastPassengerCorrectSeat / generations;
};

const isLastPassengerInCorrectSeat = (plane: number[]) => {
  return plane[plane.length - 1] === plane.length - 1;
};
