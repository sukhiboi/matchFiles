const assert = require('assert');
const lib = require('./../src/lib');

describe("#getLines()", () => {
  it("should read a file and return it contents in utf8 format", () => {
    assert.strictEqual(lib.getLines('./test/testFile'), "Hello\nWorld");
  });
});

describe("#getSuffix()", () => {
  it("should return the last 4 character of any given array of words", () => {
    const words = "sukhdev\naman\narman";
    const expected = { aman: 'aman', hdev: 'sukhdev', rman: 'arman' };
    assert.deepStrictEqual(lib.getSuffix(words), expected);
  });
});

describe("#joinWords()", () => {
  it("should join the word of second file which start with the ending of words in first file and return an array", () => {
    const dataFile1 = "ukhdev\nkaaman";
    const dataFile2 = "hdeved\namanku";
    const expected = ["ukhdeved", "kaamanku"];
    assert.deepStrictEqual(lib.joinWords(dataFile1, dataFile2), expected);
  });
});