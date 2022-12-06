import * as fs from 'fs'
import { inputParser, inputParser2, isUnique } from '../src/day_06.js'

const file = fs.readFileSync('./inputs/test/day_06.txt', 'utf8')

test('compare is array has unique value', () => {
  const input1 = ['s', 'm', 'l', 'b']
  const input2 = ['s']
  const input3 = ['s', 's', 's', 'b']

  expect(isUnique(input1)).toEqual(true)
  expect(isUnique(input2)).toEqual(true)
  expect(isUnique(input3)).toEqual(false)
})

test('parse string to get the position', () => {
  const input1 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
  const input2 = 'nppdvjthqldpwncqszvftbrmjlhg'
  const input3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
  const input4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
  expect(inputParser(file)).toEqual(7)
  expect(inputParser(input1)).toEqual(5)
  expect(inputParser(input2)).toEqual(6)
  expect(inputParser(input3)).toEqual(10)
  expect(inputParser(input4)).toEqual(11)
})

test('parse the string to get the position v2', () => {
  const input1 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
  const input2 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
  const input3 = 'nppdvjthqldpwncqszvftbrmjlhg'
  const input4 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
  const input5 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'

  expect(inputParser2(input1)).toEqual(19)
  expect(inputParser2(input2)).toEqual(23)
  expect(inputParser2(input3)).toEqual(23)
  expect(inputParser2(input4)).toEqual(29)
  expect(inputParser2(input5)).toEqual(26)
})
