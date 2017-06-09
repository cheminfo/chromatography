
const {fromText} = require('..');

const text = `
1,2
2,3
3,4
`;

const chrom = fromText(text);

console.log(chrom);