const { dictionaryToJSON } = require('./fileHandler');

const LANGUAGE = 'pt-BR';
const DICTIONARY_PATH = `./data/dic/${LANGUAGE}.dic`;
const JSON_PATH = `./data/plates/${LANGUAGE}.json`;

dictionaryToJSON(DICTIONARY_PATH, JSON_PATH)
  .then(() => console.log('Done generating JSON file.'))
  .catch((e) => console.error(e));
