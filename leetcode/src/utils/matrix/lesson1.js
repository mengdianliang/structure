/* eslint-disable no-console */
export default arr => {
  // 处理每一圈的数据遍历过程
  let map = (arr, r = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        r = r.concat(arr[i]);
      } else if (i === arr.length - 1) {
        r = r.concat(arr[i].reverse());
      } else {
        r.push(arr[i].pop());
      }
    }
    arr.shift();
    arr.pop();
    for (let i = arr.length - 1; i >= 0; i--) {
      r.push(arr[i].shift());
    }
    if (arr.length) {
      return map(arr, r);
    } else {
      return r;
    }
  };
  return map(arr, []);
};
