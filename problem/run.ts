import { simulate } from "./simulate";

console.log(
  `probability of last passengers sitting in pre-assigned seat is: ${
    simulate(100) * 100
  }%`
);
