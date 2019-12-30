/* eslint-disable no-console */
export default (tasks, n) => {
  // 表示最终队列执行的结果
  let q = [];
  // 给定任务列表的长度
  let len = tasks.length;
  // 按照相同任务重复次数最多的降序排列
  tasks = tasks
    .sort()
    .join("")
    .match(/(\w)\1+|\w/g)
    .sort((a, b) => b.length - a.length)
    .join("")
    .split("");
  while (len > 0) {
    if (!q.length) {
      q.push(tasks.shift());
      len--;
    } else {
      let slice = q.slice(-n);
      let is = -1;
      for (let i = 0; i < tasks.length; i++) {
        if (!slice.includes(tasks[i])) {
          q.push(tasks[i]);
          is = i;
          break;
        }
      }
      if (is !== -1) {
        tasks.splice(is, 1);
        len--;
      } else {
        q.push("-");
      }
    }
  }
  return q.length;
  // tasks.forEach(item => {
  //   if (Q[item]) {
  //     Q[item]++;
  //   } else {
  //     Q[item] = 1;
  //   }
  // });
  // while (1) {
  //   // 任务清单
  //   let keys = Object.keys(Q);
  //   if (!keys[0]) {
  //     break;
  //   }
  //   // 声明一个队列用来存储1+n任务单元
  //   let tmp = [];
  //   for (let i = 0; i <= n; i++) {
  //     let max = 0;
  //     let key;
  //     let pos;
  //     keys.forEach((item, idx) => {
  //       if (Q[item]) {
  //         max = Q[item];
  //         key = item;
  //         pos = idx;
  //       }
  //     });
  //     if (key) {
  //       tmp.push(key);
  //       keys.splice(pos, 1);
  //       Q[key]--;
  //       if (Q[key] < 1) {
  //         delete Q[key];
  //       }
  //     } else {
  //       break;
  //     }
  //   }
  //   q += tmp.join("").padEnd(n + 1, "-");
  //   // 边界的处理，最后不要出现冷却时间
  //   q = q.replace(/-+$/g, "");
  //   return q.length;
  // }
};
