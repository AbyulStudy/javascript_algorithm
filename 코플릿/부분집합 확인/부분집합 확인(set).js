const isSubsetOf = function (base, sample) {
  const baseLength = base.length;
  const sampleLength = sample.length;
  let set = new Set();

  for (let i = 0; i < baseLength; i++) {
    set.add(base[i]);
  }
  const baseSize = set.size;
  for (let i = 0; i < sampleLength; i++) {
    set.add(sample[i]);
  }

  return set.size === baseSize;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
