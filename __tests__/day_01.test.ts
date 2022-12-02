import * as fs from 'fs'
import { stringToNumberArray, transfromDocToData } from '../src/day_01.js'

test('Transform doc to Array of string', () => {
  const inputs = fs.readFileSync('./inputs/test/day_01.txt', 'utf8')
  const expected = [
    '1000\n2000\n3000',
    '4000',
    '5000\n6000',
    '7000\n8000\n9000',
    '10000'
  ]
  expect(transfromDocToData(inputs)).toEqual(expected)
})

test('Split calories, and transform them to number', () => {
  const inputs = '1000\n2000\n3000'
  const expected = [1000,2000,3000]
  expect(stringToNumberArray(inputs)).toEqual(expected)
  
})



