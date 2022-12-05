import day1 from "./index";

const example = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

describe("On Day 1", () => {
  it(`part 1 solves for the example input`, () => {
    expect(day1.solveForPartOne(example)).toBe("24000");
  });

  it(`part 2 solves for the example input`, () => {
    expect(day1.solveForPartTwo(example)).toBe("45000");
  });
});
