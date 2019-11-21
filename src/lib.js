const fs = require('fs');

const getLines = function(filename) {
  const contents = fs.readFileSync(filename, 'utf8').split('\n');
  return contents;
};

const getSuffix = function(contents) {
  let words = {}; 
  contents.map(function(word){
    let wordName = word.slice(-4);
    words[wordName] = word
  })
  return words;
};

const joinWords = function(contents, file2Lines) {
  let finalWords = [];
  let suffixs = getSuffix(contents);

  file2Lines.map(function(word){
    finalWords.push(suffixs[word.slice(0,4)].slice(0,2) + word);  
  })

  return finalWords;
};

exports.getLines = getLines;
exports.joinWords = joinWords;
