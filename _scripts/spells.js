const bases = ['Order','Chaos', 'Void', 'Spirit'];
const types = ['Damage','Counter','Control', 'Summon', 'Ward'];
const aspects = ['Air', 'Earth', 'Water', 'Fire', 'Life', 'Death', 'Mind', 'Time', 'Space', 'Sound', 'Illusion', 'Shadow', 'Light'];
const artifacts = ['Lexicon Rune'];

const basePoints = [1, 3, 3, 2];
const typePoints = [2, 3, 3, 3, 2];
const aspectPoints = [1, 1, 1, 2, 3, 1, 2, 3, 3, 2, 1, 3, 2];

const tiers = [
  {tier: 1, min: 6, max: 8},
  {tier: 2, min: 9, max: 11},
  {tier: 3, min: 12, max: 15},
  {tier: 4, min: 16, max:null }
];

function generateSentences() {
  let output = '';
  
  for (let i in aspects) {
    const aspect = aspects[i];
    output += `\n## ${aspect}\n\n`;

    for (let j in types) {
      const type = types[j];
      for (let k in bases) {
        const total = basePoints[k] + typePoints[j] + aspectPoints[i] + 2; // +1 for 1-2 things, +1 for Lexicon Rune
        const tier = getTier(total);
        const base = bases[k];
        const sentence = `* Tier ${tier} [Name] is a [descriptor] [${base}] [${aspect}] [${type}] [${artifacts[0]}] that targets [1-2] [things] and [does something]`;
        output += sentence + '\n';
      }
    }
  }

  return output;
}

function getTier(total) {
  for (let i in tiers) {
    const tier = tiers[i];
    if (total >= tier.min && (tier.max === null || total <= tier.max)) {
      return tier.tier;
    }
  }
  return 0;
}

console.log(generateSentences());