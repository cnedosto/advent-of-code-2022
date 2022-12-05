import * as fs from 'fs'
import { compareLowestAndHighest, isOverlaping } from '../src/day_04.js'

const file = fs.readFileSync('./inputs/test/day_04.txt', 'utf8')

test('Split the array', () => {
  const input = file.split('\n')
  const expected = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8',
  ]
  expect(input).toEqual(expected)
})
test('Convert dash into comma', () => {
  const input = file.split('\n')
  const transformed = input.map((str) => str.replace(/-/g, ','))
  const expected = [
    '2,4,6,8',
    '2,3,4,5',
    '5,7,7,9',
    '2,8,3,7',
    '6,6,4,6',
    '2,6,4,8',
  ]
  expect(transformed).toEqual(expected)
})

test('Transform string into array of Number', () => {
  const input = '2,4,6,8'
  const transformed = input.split(',').map(Number)
  const expected = [2, 4, 6, 8]
  expect(transformed).toEqual(expected)
})

test('Compare to see if contained', () => {
  const input1 = [2, 4, 6, 8]
  const input2 = [2, 8, 3, 7]
  const input3 = [6, 6, 4, 6]

  expect(compareLowestAndHighest(input1)).toEqual(false)
  expect(compareLowestAndHighest(input2)).toEqual(true)
  expect(compareLowestAndHighest(input3)).toEqual(true)
})

test('Compare overlap at all', () => {
  const input1 = [2, 4, 6, 8]
  const input2 = [2, 8, 3, 7]
  const input3 = [6, 6, 4, 6]

  expect(isOverlaping(input1)).toEqual(false)
  expect(isOverlaping(input2)).toEqual(true)
  expect(isOverlaping(input3)).toEqual(true)
})

test('Count the number of pairs', () => {
  const filteredLines = file
    .split('\n')
    .map((str) => str.replace(/-/g, ',').split(',').map(Number))
    .filter(compareLowestAndHighest)

  expect(filteredLines.length).toEqual(2)
})
