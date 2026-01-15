const { Codec } = require('./solution');

const codec = new Codec();

const examples = [
  { input: ["Hello", "World"], expected: ["Hello", "World"] },
  { input: [""], expected: [""] },
  { input: ["", ""], expected: ["", ""] },
  { input: ["a", "b", "c"], expected: ["a", "b", "c"] },
  { input: ["neet", "code"], expected: ["neet", "code"] },
  { input: ["we", "say", ":", "yes"], expected: ["we", "say", ":", "yes"] }
];

for (let i = 0; i < examples.length; i++) {
  const encoded = codec.encode(examples[i].input);
  const decoded = codec.decode(encoded);
  const ok = JSON.stringify(decoded) === JSON.stringify(examples[i].expected);
  console.log(`Case ${i + 1}:`, ok ? 'OK' : `FAIL (got ${JSON.stringify(decoded)}, expected ${JSON.stringify(examples[i].expected)})`);
}