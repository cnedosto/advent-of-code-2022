import * as fs from 'fs'

type TransformFunction = (file: string) => Array<string>
type ConvertFunction = (elf: string) => Array<number>
type CaloriesBeforeConversion = string
type CaloriesAfterConversion = Array<number>


export const transfromDocToData: TransformFunction = (file) => {
  const groupedElves: Array<string> = file.trim().split('\n\n')
  return groupedElves
}

export const stringToNumberArray: ConvertFunction = (
  calories: CaloriesBeforeConversion
) => {
  const numbers: CaloriesAfterConversion = calories
    .split('\n')
    .map((c) => parseInt(c, 10))
  return numbers
}

const inputs: string = fs.readFileSync('./inputs/personnal/day_01.txt', 'utf8')
const elves: Array<string> = transfromDocToData(inputs)

const highestCalories = [];

for (const elf of elves) {
  const aggregate = stringToNumberArray(elf).reduce((a, b) => a + b)
    highestCalories.push(aggregate);
}

const topThreeCalories: Array<number> = highestCalories.sort().slice((highestCalories.length - 3), highestCalories.length);
const aggregateTopThreeCalories: number = topThreeCalories.reduce((a,b) => a + b)

console.log('answer : ', aggregateTopThreeCalories);