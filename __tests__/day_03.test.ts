import * as fs from 'fs'
import { calculatePriority, findDuplicate, SplitFile, splitInput } from '../src/day_03.js'

const file = fs.readFileSync('./inputs/test/day_03.txt', 'utf8')

test('Transform doc to Array of string', () => {
  const expected = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
  ]
  expect(file.trim().split('\n')).toEqual(expected)
})

test('Split items in compartiment', () => {
  const input = 'vJrwpWtwJgWrhcsFMMfFFhFp'
  const expected = ['vJrwpWtwJgWr', 'hcsFMMfFFhFp']
  expect(splitInput(input)).toEqual(expected)
})

test('Find duplicate', () => {
  const input = ['vJrwpWtwJgWr', 'hcsFMMfFFhFp']
  expect(findDuplicate(input)).toEqual('p')
})

test('Calculate priority', () => {
  const input = 'p'
  const input2 = 'L'
  expect(calculatePriority(input)).toEqual(16)
  expect(calculatePriority(input2)).toEqual(38)
})

test('Group elves by 3', () => {
  const expected = [
    [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg'
    ],
    [
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ]
  ]
  expect(SplitFile(file)).toEqual(expected)
})
