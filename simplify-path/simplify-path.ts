export const simplify = (path: string) => {
  const canonicalPath = path
    .split("/")
    .filter((n) => n)
    .reduce((acc, element) => {
      if (element === "..") {
        acc.pop();
      } else if (element !== ".") {
        acc.push(element);
      }
      return acc;
    }, [] as string[])
    .join("/");

  return `/${canonicalPath}`;
};
