/* eslint-disable no-console */
//格雷编码
export default str => {
  var reg = /^(\w+)\1+$/;
  return reg.test(str);
};
