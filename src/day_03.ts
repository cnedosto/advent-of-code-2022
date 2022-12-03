import * as fs from 'fs'

export const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'
export const alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

type SplitFunction = (input: string) => Array<string>
type FindDuplicateFunction = (input: Array<string>) => string
type CalcultaPriorityFunction = (input: string) => number
type SplitFileFunction = (file: string) => Array<string>

const file = fs.readFileSync('./inputs/personnal/day_03.txt', 'utf8')

const items: Array<string> = file.trim().split('\n')

export const splitInput: SplitFunction = (input: string) => {
  const string1: string = input.slice(0, input.length / 2)
  const string2: string = input.slice(input.length / 2, input.length)
  return [string1, string2]
}


export const findDuplicate: FindDuplicateFunction = (input) => {
  const [string1, string2, string3] = input
  let duplicate = ''
  string1.split('').map((char) => {
    if (!string3) {
      if (string2.includes(char)) {
        duplicate = char
      }
      return
    }

    if (string2.includes(char) && string3.includes(char)) {
      duplicate = char
    }
  })
  return duplicate
}

export const calculatePriority: CalcultaPriorityFunction = (input) => {
  let priority = 0
  if (alphabetLowercase.includes(input)) {
    priority = alphabetLowercase.indexOf(input) + 1
  } else if (alphabetUppercase.includes(input)) {
    priority = alphabetUppercase.indexOf(input) + 27
  } else {
    return priority
  }
  return priority
}

export const SplitFile: SplitFileFunction = (file: string) => {
  const array = file.trim().split('\n')
  return array.reduce((init, current, index) => {
    const splitIndex = Math.floor(index / 3)
    if (!init[splitIndex]) {
      init[splitIndex] = []
    }
    init[splitIndex].push(current)
    return init
  }, [])
}

let overallPriority = 0

for (const i of items) {
  const splitted = splitInput(i)
  const duplicate = findDuplicate(splitted)
  const priority = calculatePriority(duplicate)
  overallPriority += priority
}

const badgeList = SplitFile(file).map((elves) => {
    const items = [elves[0],elves[1],elves[2]]
    const duplicate = findDuplicate(items)
    return calculatePriority(duplicate)
})

const answer2 = badgeList.reduce((a, b) => a + b)

console.log('answer 1 :', overallPriority)
console.log('answer2 :', answer2)
