// Solution of Task 1 of The Weekly Challenge 21
// https://theweeklychallenge.org/blog/perl-weekly-challenge-021/

// $ npm i --save-dev @types/node

// Test run:
// $ tsc ch-1.ts ; node ch-1.js 20
// 2.7182818284590455

let max = 100

const args = process.argv.slice(2)
if (args.length == 1) {
    max = Number(args[0])
}

let e: number = 1.0
let f: number = 1.0

for (let n = 1; n < max; n++) {
    f *= n
    e += 1 / f
}

console.log(e)
