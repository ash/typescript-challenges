// Solution of Task 1 of The Weekly Challenge 21
// https://theweeklychallenge.org/blog/perl-weekly-challenge-021/
// $ npm i --save-dev @types/node
var max = 100;
var args = process.argv.slice(2);
if (args.length == 1) {
    max = Number(args[0]);
}
var e = 1.0;
var f = 1.0;
for (var n = 1; n < max; n++) {
    f *= n;
    e += 1 / f;
}
console.log(e);
