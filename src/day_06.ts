import * as fs from 'fs'

const file = fs.readFileSync('./inputs/personnal/day_06.txt', 'utf8')

type UniqueFunction = (input: Array<string>) => boolean
type ParserFunction = (input: string) => number

export const isUnique: UniqueFunction = (input) =>
  input.length === new Set(input).size

export const inputParser: ParserFunction = (input) => {
  const arr = []
  let position = null
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i])
    if (arr.length > 4) {
      arr.shift()
    }
    if (arr.length === 4 && isUnique(arr)) {
      position = i + 1
      break
    }
  }
  return position
}

export const inputParser2: ParserFunction = (input) => {
  const arr = []
  let position = null
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i])
    if (arr.length > 14) {
      arr.shift()
    }
    if (arr.length === 14 && isUnique(arr)) {
      position = i + 1
      break
    }
  }
  return position
}

console.log('answer 1 : ', inputParser(file))
console.log('answer 2 : ', inputParser2(file))
