import { getRandomNumberFromList } from "./getRandomNumber";

export const getSeat = (availableSeats: number[], passenger: number) => {
  const seat = availableSeats.includes(passenger)
    ? passenger
    : getRandomNumberFromList(availableSeats);

  return {
    passenger,
    seat,
    updatedAvailableSeats: availableSeats.filter(
      (availableSeat) => availableSeat != seat
    ),
  };
};

export const fillPlane = () => {
  let availableSeats = Array(100)
    .fill(-1)
    .map((_, index) => index);

  const plane = Array(100).fill(-1);

  const seatsWithoutFirst = [...availableSeats];
  seatsWithoutFirst.shift();

  const { seat, updatedAvailableSeats } = getSeat(seatsWithoutFirst, 0);
  plane[0] = seat;

  availableSeats = [0, ...updatedAvailableSeats];

  for (let passenger = 1; passenger < 100; passenger += 1) {
    const result = getSeat(availableSeats, passenger);

    plane[passenger] = result.seat;
    availableSeats = result.updatedAvailableSeats;
  }

  return plane;
};
