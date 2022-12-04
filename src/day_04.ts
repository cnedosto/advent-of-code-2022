import * as fs from 'fs'
const file = fs.readFileSync('./inputs/personnal/day_04.txt', 'utf8')

type CompareFunction = (input: Array<number>) => boolean
export const compareLowestAndHighest: CompareFunction = (input) => {
  const [lowest1, highest1, lowest2, highest2] = input
  return (
    (lowest1 >= lowest2 &&
      lowest1 <= highest2 &&
      highest1 >= lowest2 &&
      highest1 <= highest2) ||
    (lowest2 >= lowest1 &&
      lowest2 <= highest1 &&
      highest2 >= lowest1 &&
      highest2 <= highest1)
  )
}

const answer1 = file
  .split('\n')
  .map((str) => str.replace(/-/g, ',').split(',').map(Number))
  .filter(compareLowestAndHighest).length

console.log('answer 1 : ', answer1)
