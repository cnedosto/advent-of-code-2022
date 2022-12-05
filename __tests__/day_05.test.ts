import * as fs from 'fs'
import { moveTheCrate, transpose, useCrateMover9001 } from '../src/day_05.js'

const file = fs.readFileSync('./inputs/test/day_05.txt', 'utf8')

test('Split cargo and moves', () => {
  const input = file.split('\n\n')
  const expected = [
    '    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 ',
    'move 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2',
  ]
  expect(input).toEqual(expected)
})

test('Reformat cargo', () => {
  const input = '    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 '
  const rows = input.split('\n').map((row) => {
    const newRow = []
    for (let i = 1; i < row.length; i += 4) {
      if (row[i] === ' ') {
        newRow.push('*')
      } else {
        newRow.push(row[i])
      }
    }
    return newRow
  })
  const expected = [
    ['*', 'D', '*'],
    ['N', 'C', '*'],
    ['Z', 'M', 'P'],
    ['1', '2', '3'],
  ]
  expect(rows).toEqual(expected)
})

test('Convert rows into cols', () => {
  const input = [
    ['*', 'D', '*'],
    ['N', 'C', '*'],
    ['Z', 'M', 'P'],
    ['1', '2', '3'],
  ]

  const expected = [
    ['1', 'Z', 'N', '*'],
    ['2', 'M', 'C', 'D'],
    ['3', 'P', '*', '*'],
  ]
  expect(transpose(input)).toEqual(expected)
})

test('Convert moves into rules', () => {
  const input =
    'move 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2'

  const rulesArray = input
    .split('\n')
    .map((arr) => arr.match(/[-+]?[0-9]*\.?[0-9]+/g))

  const expected = [
    ['1', '2', '1'],
    ['3', '1', '3'],
    ['2', '2', '1'],
    ['1', '1', '2'],
  ]

  expect(rulesArray).toEqual(expected)
})

test('Move crates', () => {
  const crates = [
    ['1', 'Z', 'N', '*'],
    ['2', 'M', 'C', 'D'],
    ['3', 'P', '*', '*'],
  ]
  const moves = ['1', '2', '1']
  const expected = [
    ['1', 'Z', 'N', 'D'],
    ['2', 'M', 'C'],
    ['3', 'P'],
  ]

  expect(moveTheCrate(crates, moves)).toEqual(expected)
})

test('Use the 9001 CrateMover', () => {
  const crates = [
    ['1', 'Z', 'N', '*'],
    ['2', 'M', 'C', 'D'],
    ['3', 'P', '*', '*'],
  ]

  const moves = [
    ['1', '2', '1'],
    ['3', '1', '3'],
    ['2', '2', '1'],
    ['1', '1', '2'],
  ]

  const expected = [
    ['1', 'M'],
    ['2', 'C'],
    ['3', 'P', 'Z', 'N', 'D'],
  ]

  let answer = crates

  for (const move of moves) {
    answer = useCrateMover9001(answer, move)
  }

  expect(answer).toEqual(expected)
})
