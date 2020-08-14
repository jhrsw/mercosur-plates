const ASSOCIATIONS = {
  'A': '4',
  'B': '8',
  'E': '3',
  'G': '6',
  'I': '1',
  'O': '0',
  'Q': '9',
  'S': '5',
  'T': '7',
  'Z': '2'
};

function cleanWord(word) {
  return word.split('/')[0].trim();
}

function normalizeWord(word) {
  return word.normalize('NFKD').replace(/[^\w]/g, '');
}


function hasSevenAlphabetChars(word) {
  return word.match(/^[A-zÀ-ú]{7}$/) !== null;
}

function isMatch(word) {
  if (word.length < 7) {
    return false;
  }

  return normalizeWord(word[3]).toUpperCase() in ASSOCIATIONS &&
    normalizeWord(word[5]).toUpperCase() in ASSOCIATIONS &&
    normalizeWord(word[6]).toUpperCase() in ASSOCIATIONS;
}


function convertToLeet(word) {
  let leet = word.split('').map((char) => char.toUpperCase());

  for (let i of [3, 5, 6]) {
    leet[i] = ASSOCIATIONS[leet[i]];
  }

  return leet.join('');
}

module.exports = {
  normalizeWord,
  isMatch,
  hasSevenAlphabetChars,
  cleanWord,
  convertToLeet,
}