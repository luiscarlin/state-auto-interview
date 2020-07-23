import { simplify } from "./simplify-path";
describe("simplify path", () => {
  it("does not print last slash", () => {
    expect(simplify("/home/")).toEqual("/home");
  });

  it("cannot got higher than root", () => {
    expect(simplify("/../")).toEqual("/");
  });

  it("single slash is used instead of multiple ones", () => {
    expect(simplify("/home//foo/")).toEqual("/home/foo");
  });

  it("finds shortest path to folder", () => {
    expect(simplify("/a/./b/../../c/")).toEqual("/c");
  });

  it("finds shortest path to folder with multiple //", () => {
    expect(simplify("/a/../../b/../c//.//")).toEqual("/c");
  });

  it("finds shortest path to folder with multiple // and ..", () => {
    expect(simplify("/a//b////c/d//././/..")).toEqual("/a/b/c");
  });
});
