import * as fs from 'fs'
import {
  handleRoundScore,
  handleSecretGuide,
  handleShapePoint,
} from '../src/day_02.js'

// rules :
// Rock 1pt : A & X
// Paper 2pt : B & Y
// Scisors 3pt : C & Z

// Win : 6 pts
// Draw : 3 pts
// Loss : 0 pts

const file = fs.readFileSync('./inputs/test/day_02.txt', 'utf8')

test('Transform doc to Array of string', () => {
  const inputs = fs.readFileSync('./inputs/test/day_02.txt', 'utf8')
  const expected = ['A Y', 'B X', 'C Z']
  expect(inputs.trim().split('\n')).toEqual(expected)
})

test('Shape point function', () => {
  const input1 = 'Y'
  const input2 = 'X'
  const input3 = 'Z'
  expect(handleShapePoint(input1)).toEqual(2)
  expect(handleShapePoint(input2)).toEqual(1)
  expect(handleShapePoint(input3)).toEqual(3)
})

test('Round score function', () => {
  expect(handleRoundScore('A', 'Y')).toEqual(6)
  expect(handleRoundScore('B', 'X')).toEqual(0)
  expect(handleRoundScore('C', 'Z')).toEqual(3)
})

test('Calculate the total points', () => {
  const inputs = file.trim().split('\n')
  let points = 0
  for (const round of inputs) {
    const shape = round.split(' ')
    points += handleShapePoint(shape[1])
    points += handleRoundScore(shape[0], shape[1])
  }
  expect(points).toEqual(15)
})

test('Ultra secret guide', () => {
  const expected = ['A Y', 'B X', 'C Z']
  let points = 0
  for (const round of expected) {
    const shape = round.split(' ')
    points += handleSecretGuide(shape[0], shape[1])
  }
  expect(points).toEqual(12)
})
