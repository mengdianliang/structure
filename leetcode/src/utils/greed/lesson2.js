export default input => {
  // 表示自己的钱箱（用于存储零钱）
  let hand = [];
  // 判断是否有顾客还在
  while (input.length) {
    // 取出当前排在最前面顾客的钱
    let money = input.shift();
    // 这种情况不需要找零
    if (money === 5) {
      hand.push(money);
    } else {
      // 手里零钱降序排列
      hand.sort((a, b) => b - a);
      // 顾客的钱减去饮料的钱就是需求找给顾客的零钱
      let change = money - 5;
      for (let i = 0; i < hand.length; i++) {
        if (hand[i] <= change) {
          change -= hand[i];
          hand.splice(i, 1);
          // 删除了元素， 数组长度发生了变化，要维持刚才的i不变
          i--;
        }
        if (change === 0) {
          break;
        }
      }
      // 没有足够的零钱找给顾客money
      if (change !== 0) {
        return false;
      } else {
        // 顾客的钱存起来
        hand.push(money);
      }
    }
  }
  return true;
};
