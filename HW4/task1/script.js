const scores = {
  programming: 88,
  design: 74,
  jurisprudence: false,
  relational_DB: 92,
  computerGraphics: "submitted",
  patterns: 65,
  philosophy: "transferred",
  network: 81
};

for (let key in scores) {
  if (typeof scores[key] !== 'number') {
    delete scores[key];
  }
}

console.log(scores);
