// 获取第k个最大元素
// export default (arr, k) => {
//   return arr.sort((a, b) => b - a)[k - 1];
// };
export default (arr, k) => {
  let len = arr.length - 1;
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }
  return arr[arr.length - k];
};
