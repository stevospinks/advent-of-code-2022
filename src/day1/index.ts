import { Day } from "../day";
import { ImportParser } from "../utils/import-parser";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  solveForPartOne(input: string): string {
    const calorieGroups = ImportParser.ToNumberArrays(input);
    const calorieGroupSums = calorieGroups.map((cg) =>
      cg.reduce((prevC, c) => prevC + c)
    );
    calorieGroupSums.sort((a, b) => b - a);
    return calorieGroupSums[0].toString();
  }

  solveForPartTwo(input: string): string {
    const calorieGroups = ImportParser.ToNumberArrays(input);
    const calorieGroupSums = calorieGroups.map((cg) =>
      cg.reduce((prevC, c) => prevC + c)
    );
    calorieGroupSums.sort((a, b) => b - a);
    return (calorieGroupSums[0]+calorieGroupSums[1]+calorieGroupSums[2]).toString();
  }
}

export default new Day1();
