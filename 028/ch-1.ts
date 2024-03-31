// Solution of Task 1 of The Weekly Challenge 28
// https://theweeklychallenge.org/blog/perl-weekly-challenge-028/

// $ tsc ch-1.ts
// $ node ch-1.js 
// 19:14:33

let now = new Date()
console.log(now.toLocaleTimeString(
    'en-US', {
        hour12: false
    }))
