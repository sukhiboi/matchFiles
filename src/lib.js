const fs = require('fs');

const getLines = function(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  return contents;
};

const getSuffix = function(fileContents) {
  let words = {}; 
  let contents = fileContents.split('\n');
  contents.map(function(word){
    let wordName = word.slice(-4);
    words[wordName] = word
  })
  return words;
};

const joinWords = function(contents, file2Lines) {
  let finalWords = [];
  let suffixs = getSuffix(contents);
  const lines = file2Lines.split('\n');

  lines.map(function(word){
    finalWords.push(suffixs[word.slice(0,4)].slice(0,3) + word);  
  })

  return finalWords;
};

exports.getLines = getLines;
exports.getSuffix = getSuffix;
exports.joinWords = joinWords;
