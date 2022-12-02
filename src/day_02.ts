import * as fs from 'fs'

const file = fs.readFileSync('./inputs/personnal/day_02.txt', 'utf8')
const inputs = file.trim().split('\n')

export type FunctionShapePoints = (letter: string) => number
export type FunctionRoundScore = (
  firstLetter: string,
  secondLetter: string
) => number
export type PickingFunction = (shape: string) => number

export const handleShapePoint: FunctionShapePoints = (letter: string) => {
  switch (letter) {
    case 'X':
      return 1
    case 'Y':
      return 2
    case 'Z':
      return 3
    default:
      return 0
  }
}

export const handleRoundScore: FunctionRoundScore = (
  opp: string,
  curr: string
) => {
  if (opp === 'A' && curr === 'X') {
    return 3
  } else if (opp === 'A' && curr === 'Y') {
    return 6
  } else if (opp === 'A' && curr === 'Z') {
    return 0
  } else if (opp === 'B' && curr === 'X') {
    return 0
  } else if (opp === 'B' && curr === 'Y') {
    return 3
  } else if (opp === 'B' && curr === 'Z') {
    return 6
  } else if (opp === 'C' && curr === 'X') {
    return 6
  } else if (opp === 'C' && curr === 'Y') {
    return 0
  } else if (opp === 'C' && curr === 'Z') {
    return 3
  } else return 0
}

const pickToWin: PickingFunction = (shape) => {
  switch (shape) {
    case 'A':
      return 6 + 2
    case 'B':
      return 6 + 3
    case 'C':
      return 6 + 1

    default:
      return 0
  }
}
const pickToLose: PickingFunction = (shape) => {
  switch (shape) {
    case 'A':
      return 0 + 3
    case 'B':
      return 0 + 1
    case 'C':
      return 0 + 2

    default:
      return 0
  }
}
const pickToDraw: PickingFunction = (shape) => {
  switch (shape) {
    case 'A':
      return 3 + 1
    case 'B':
      return 3 + 2
    case 'C':
      return 3 + 3

    default:
      return 0
  }
}
export const handleSecretGuide: FunctionRoundScore = (
  opp: string,
  curr: string
) => {
  if (curr === 'Y') {
    return pickToDraw(opp)
  } else if (curr === 'X') {
    return pickToLose(opp)
  } else if (curr === 'Z') {
    return pickToWin(opp)
  } else return null
}

let part1 = 0
let part2 = 0

  for (const round of inputs){
    const shape = round.split(' ');
    part1 += handleShapePoint(shape[1])
    part1 += handleRoundScore(shape[0], shape[1])
  }

for (const round of inputs) {
  const shape = round.split(' ')
  part2 += handleSecretGuide(shape[0], shape[1])
}



console.log('answer 1 : ', part1)
console.log('answer 2 : ', part2)

