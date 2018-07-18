'use strict';

let string = 'This will test the repeated word, this will work.';
const repeatedWord = (str) => {
  const map = {};
  let output = null;
  string = str.replace(/\./g, ' ');
  console.log(string);
  let i = 0;
  while (output === null) {
    const split = string.split(' ');
    map[split[i]] === 'undefined' ? map[split[i]] = 1 : map[split[i]]++;
    console.log(map);
    map[split[i]] === 2 ? output = split[i] : i++;
  }
  console.log(output);
};
repeatedWord(string);
