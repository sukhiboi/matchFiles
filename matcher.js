const lib = require('./src/lib.js');
const lfile1 = './match_large_1.txt';
const lfile2 = './match_large_2.txt';

const contentOfFile = [
  lib.getLines(lfile1),
  lib.getLines(lfile2)
];

const main = function() {
  const words = joinWords(contentOfFile[0], contentOfFile[1]);
  console.log(words);
};

main();
