var scoreOfString = function (s: string) {
  let res = 0;
  for (let i = 1; s.length > i; i++) {
    res += Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0));
  }
  return res;
};
