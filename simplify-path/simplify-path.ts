export const simplify = (path: string) => {
  const pathStack: string[] = [];
  path
    .split("/")
    .filter((n) => n)
    .forEach((element) => {
      if (element === "..") {
        pathStack.pop();
      } else if (element !== ".") {
        pathStack.push(element);
      }
    });

  return `/${pathStack.join("/")}`;
};
