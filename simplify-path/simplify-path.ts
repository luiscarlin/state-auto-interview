export const simplify = (path: string) => {
  path = path.replace(/\/\//g, "/");

  if (path === "/../") {
    return "/";
  }
  return path.slice(0, -1);
};
