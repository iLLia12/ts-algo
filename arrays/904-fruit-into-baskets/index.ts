const totalFruit = function (fruits: number[]): number {
  let count = 0;
  const b = new Set();
  b.add(fruits[0]);
  let c = 1;
  let j = 1;
  for (let i = 1; fruits.length > i; i++) {
    b.add(fruits[i]);
    if (b.size == 3) {
      b.clear();
      b.add(fruits[i]);
      b.add(fruits[i - 1]);
      count = Math.max(count, j + 1);
      c = j + 1;
    } else {
      c++;
      count = Math.max(count, c);
    }
    if (fruits[i] == fruits[i - 1]) j++;
    else j = 1;
  }
  count = Math.max(count, c);
  return count;
};
