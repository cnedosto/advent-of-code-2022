import * as fs from 'fs'

type useCrateMoverFunction = (
  crates: Array<Array<string>>,
  move: Array<string>
) => Array<Array<string>>

type MoveCrateFunction = (
  crates: Array<Array<string>>,
  moves: Array<string>
) => Array<Array<string>>

export const moveTheCrate: MoveCrateFunction = (crates, move) => {
  const [number, starting, arriving] = move
  const newCrates = crates.map((cr) => cr.filter((c) => c !== '*'))

  for (let i = 0; i < parseInt(number); i++) {
    const crate = newCrates[parseInt(starting) - 1].pop()
    newCrates[parseInt(arriving) - 1].push(crate)
  }
  return newCrates
}

export const useCrateMover9001: useCrateMoverFunction = (crates, move) => {
  const [number, starting, arriving] = move
  const newCrates = crates.map((cr) => cr.filter((c) => c !== '*'))

  const crate = newCrates[parseInt(starting) - 1].splice(
    -parseInt(number),
    parseInt(number)
  )
  newCrates[parseInt(arriving) - 1] =
    newCrates[parseInt(arriving) - 1].concat(crate)
  return newCrates
}

const file = fs.readFileSync('./inputs/personnal/day_05.txt', 'utf8')

const [cargo, rules] = file.split('\n\n')
const rows = cargo.split('\n').map((row) => {
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

export const transpose = (matrix: any) => {
  const [row] = matrix
  return row.map((_value, column) => {
    return matrix.map((row) => row[column]).reverse()
  })
}

const cols = transpose(rows)
const newRules = rules
  .split('\n')
  .map((arr) => arr.match(/[-+]?[0-9]*\.?[0-9]+/g))

let answer1 = cols
let answer2 = cols

for (const rule of newRules) {
  answer1 = moveTheCrate(answer1, rule)
  answer2 = useCrateMover9001(answer2, rule)
}

console.log('answer 1: ', answer1.map((a) => a[a.length - 1]).join(''))
console.log('answer 2: ', answer2.map((a) => a[a.length - 1]).join(''))
