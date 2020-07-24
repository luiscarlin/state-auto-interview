export const getRandomNumberFromList = (list: number[]) => {
  const randomIndex = Math.round(Math.random() * (list.length - 1));

  return list[randomIndex];
};
