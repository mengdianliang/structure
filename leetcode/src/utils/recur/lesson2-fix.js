export default (str, words) => {
  // 计算字符串的总长度
  let strLen = str.length;
  // 计算所有的单词数量
  let wordsLen = words.length;
  // 计算所有单词出现的起始位置和截止位置
  let pos = {};
  // 如果字符串的长度小于所有单词的总长度直接返回
  if (strLen < words.join("").length) {
    return [];
  }
  // 遍历所有单词查找在字符串中的起始位置和截止位置
  words.every(word => {
    if (pos[word]) {
      return true;
    }
    let wl = word.length;
    let tmp = [];
    for (let i = 0; i < strLen - wl; i++) {
      let idx = str.slice(i).indexOf(word);
      if (idx > -1) {
        if (idx === 0) {
          tmp.push({
            start: i,
            end: i + wl
          });
        } else if (str[i + 1] !== word[0]) {
          i += idx - 1;
        }
      } else {
        break;
      }
    }
    // 如果没有匹配到单词终止遍历
    if (tmp[0] === undefined) {
      return false;
    } else {
      // 遍历当前单词的位置，遍历下一个单词
      pos[word] = tmp.sort((a, b) => a.start - b.start);
      return true;
    }
  });
  // 只要有一个单词未找到，说明不能匹配到连续的字符串
};
