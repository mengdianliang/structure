// 奇数偶数归属
export default arr => {
  if (arr.length < 2) {
    return arr;
  }
  // 进行降序排序
  arr.sort((a, b) => a - b);
  // 声明一个空数组用来存储最后结果
  let r = [];
  let odd = 1;
  let even = 0;
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item;
      odd += 2;
    } else {
      r[even] = item;
      even += 2;
    }
  });
  return arr;
};
