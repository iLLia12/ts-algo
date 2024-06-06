var commonChars = function (words: string[]): string[] {
  const res: string[] = [];
  function counter(str: string) {
    const cnt: Record<string, number> = {};
    for (let i = 0; str.length > i; i++) {
      if (cnt[str[i]] == undefined) {
        cnt[str[i]] = 1;
      } else cnt[str[i]]++;
    }
    return cnt;
  }
  const cnt = counter(words[0]);

  for (const l in cnt) {
    for (let i = 1; words.length > i; i++) {
      const cur = counter(words[i]);
      cnt[l] = Math.min(cnt[l], cur[l]);
    }
  }

  for (const l in cnt) {
    if (Number.isNaN(cnt[l])) continue;
    const a = Array(cnt[l]).fill(0);
    for (let i = 0; a.length > i; i++) {
      res.push(l);
    }
  }

  return res;
};
