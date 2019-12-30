// export default str => {
//   // 字符串按空格分割，保存数组
//   let arr = str.split(" ");
//   let result = arr
//     .map(item => {
//       return item
//         .split("")
//         .reverse()
//         .join("");
//     })
//     .join(" ");
//   return result;
// };

export default str => {
  // 字符串按空格分割，保存数组
  let arr = str.split(/\s/g);
  let result = arr
    .map(item => {
      return item
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
  return result;
};
