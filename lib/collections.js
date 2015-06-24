'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
var words = paragraph.split(/\s+/);

// The word list normalized (all lower case with punctuation removed)
var normalizedWords = [];

for (var i = 0; i < words.length; i++) {
  var normalWord = words[i].replace(/[^\w’]/, '').toLowerCase();
  normalizedWords[i] = normalWord;

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

// run through every name in the list and give it a value of true if it is the first time we are encountering it, otherwize set it to false.
for (var i = 0; i < normalizedWords.length; i++) {
  var key = normalizedWords[i];
  if (uniqueWordsAsKeys[key] === undefined) {
    uniqueWordsAsKeys[key] = true;
  } else {
    uniqueWordsAsKeys[key] = false;
  }
  console.log("uniqueWordsAsKeys now has keys..." uniqueWordsAsKeys.keys.toString());
}

// The keys pulled out into a list

var uniqueWords = [];
for (var key in uniqueWordsAsKeys) {
  uniqueWords[uniqueWords.length] = key;
}

// The words as keys and the values the count of each word
// Step 0: Go through every word in the list. For each word..
// Step 1: If a new word is encountered, add it to the dictionary & Set the count of the new word at 1
// Step 2: If we've seen the word, increase the count by 1

var wordFrequencies = {};
for (var i = 0; i < normalizedWords.length; i++) {
  if (wordFrequencies[normalizedWords[i]] === undefined) {
    wordFrequencies[normalizedWords[i]] = 1;
  } else {
    wordFrequencies[normalizedWords[i]] += 1;
  }
}

module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  wordFrequencies: wordFrequencies
};


