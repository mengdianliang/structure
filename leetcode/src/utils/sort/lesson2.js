/* eslint-disable no-console */
export default arr => {
  // 数组相邻元素间距
  if (arr.length < 2) {
    return 0;
  }
  // 排序
  arr.sort();
  // 保存最大差值
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let tmp = arr[i + 1] - arr[i];
    if (tmp > max) {
      max = tmp;
    }
  }
  return max;
};
