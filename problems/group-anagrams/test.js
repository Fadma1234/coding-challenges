const { groupAnagrams } = require('./solution');

const examples = [
  { strs: ["act","pots","tops","cat","stop","hat"] },
  { strs: ["x"] },
  { strs: [""] }
];

for (let i = 0; i < examples.length; i++) {
  const { strs } = examples[i];
  const r = groupAnagrams(strs);
  console.log(`Case ${i+1}:`, r);
}
