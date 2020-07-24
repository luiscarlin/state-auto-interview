export const getRandomNumberFromList = (list: number[]) => {
  const randomIndex = Math.floor(Math.random() * (list.length - 1));

  return list[randomIndex];
};
