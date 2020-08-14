const {
  normalizeWord,
  isMatch,
  hasSevenAlphabetChars,
  cleanWord,
  convertToLeet,
} = require('./processing');

function wordsGenerator(dic) {
  const dictionaryLines = dic.toString().split('\n');

  const matches = dictionaryLines
    .map(cleanWord)
    .filter(hasSevenAlphabetChars)
    .filter(isMatch);

  let finalWords = {};

  matches.forEach((word) => {
    const key = convertToLeet(normalizeWord(word));
    finalWords[key] = word.toUpperCase();
  });

  return finalWords;
}

module.exports = {
  wordsGenerator
};