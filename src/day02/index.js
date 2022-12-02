import run from "aocrunner";

import fs from "fs";
const testInput = fs.readFileSync("./src/day02/testInput.txt").toString();

const parseInput = (rawInput) => rawInput
  .split("\n").map(round => round.split(" "));

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const winMap = {
    'A': 'Y',
    'B': 'Z',
    'C': 'X'
  }
  const drawMap = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z'
  }
  const scoreMap = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }

  function scoreRound(round) {
    switch (true) {
      case round[1] === winMap[round[0]]:
        return 6
        break;
      case round[1] === drawMap[round[0]]:
        return 3
        break;
      default:
        return 0
    }
  }

  function calcScore() {
    return input.reduce((sum, round) => {
      return sum += (scoreRound(round) + scoreMap[round[1]])
    }, 0)
  }


  return calcScore() 
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
const winMap = {
    'A': 'B',
    'B': 'C',
    'C': 'A'
  }
  
  const scoreMap = {
    'X': 0,
    'Y': 3,
    'Z': 6,
    'A': 1,
    'B': 2,
    'C': 3
  }

  function makeChoice(shape, result){
    switch(true){
      case result === 'X':
        return Object.keys(winMap).find(choice => winMap[choice]===shape)
        break;
      case result === 'Y':
        return shape
        break;
      default:
        return Object.values(winMap).find(val => winMap[shape] === val)
        break;
    }
  }

  function scoreRound(round){
    return scoreMap[makeChoice(...round)]+scoreMap[round[1]]  
  }

  return input.reduce((sum, round) => {
    return sum += scoreRound(round)
  },0)
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input: testInput,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
