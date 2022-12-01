import run from "aocrunner"

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`


const parseInput = (rawInput) => {
  return rawInput.split("\n\n").map(group => group.split("\n"))
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput)  
  const groupWeights = input.map(group =>{
    return group.reduce((sum, num)=> sum+=Number(num),0)
    })

  return Math.max(...groupWeights).toString()
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const groupWeights = input.map(group =>{
  return group.reduce((sum, num)=> sum+=Number(num),0)
  })

  return groupWeights.sort((a, b)=>a-b).slice(-3).reduce((sum,num)=> sum+=num,0).toString()
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: testInput,
        expected: '24000'
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: testInput,
        expected: '45000'
      }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
