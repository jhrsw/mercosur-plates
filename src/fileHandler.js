const fs = require('fs');
const { wordsGenerator } = require('./generator');

async function dictionaryToJSON(inputPath, outputPath) {
  const data = await fs.promises.readFile(inputPath);
  const generatedWords = await wordsGenerator(data);
  const generatedWordsJSON = await JSON.stringify(generatedWords);
  await fs.promises.writeFile(outputPath, generatedWordsJSON);
}

module.exports = { dictionaryToJSON };