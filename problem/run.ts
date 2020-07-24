import { simulate } from "./simulate";

console.log(
  `Probability of last passenger sitting in pre-assigned seat is: ${
    simulate(100000) * 100
  }%`
);
