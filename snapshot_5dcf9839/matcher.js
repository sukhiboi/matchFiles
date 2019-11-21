const fs = require('fs');

const sfile1 = './match_small_1.txt';
const sfile2 = './match_small_2.txt';

const lfile1 = './match_large_1.txt';
const lfile2 = './match_large_2.txt';

const readFile = function(fileName) {
  const contents = fs.readFileSync(fileName, 'utf8');
  return contents;
};

const file1wordToObj = function(lines){
  let words = {}; 
  for(let i=0; i<lines.length;i++){
    nWord = lines[i].slice(-4)
    words[nWord] = {
      word: lines[i].slice(0, 2) 
    } 
  }
  return words;
}

const file2wordToObj = function(lines){
  let words = {}; 
  for(let i=0; i<lines.length;i++){
    nWord = lines[i].slice(0, 4)
    words[nWord] = {
      word: lines[i] 
    } 
  }
  return words;
} 

file1Content = readFile(sfile1);
file2Content = readFile(sfile2);

file1Lines = file1Content.split('\n').slice(0, -1);
file2Lines = file2Content.split('\n').slice(0, -1);

const file1Words = file1wordToObj(file1Lines);
const file2Words = file2wordToObj(file2Lines);

//console.log(file1Words);
//console.log(file2Words);

const file1Keys = Object.keys(file1Words);
const file2Keys = Object.keys(file2Words);

//console.log((file1Keys));

for(let i=0; i<file2Keys.length; i++){
  console.log(file1Words[file1Keys[i]].word + file2Words[file1Keys[i]].word);

} 
