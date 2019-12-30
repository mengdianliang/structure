import { Heap } from "../../../../../../BaiduNetdiskDownload/JavaScript版 数据结构与算法(完整)/解压/leetcode/code/heap/lesson2";

class Ugly {
  constructor(n, primes) {
    this.n = n;
    this.primes = new Heap(primes);
  }
  getAll() {
    // 超级丑数列表
    let res = [1];
    let i = 2;
    let primes = this.primes;
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i);
      let k = 0;
    }
  }
  // 计算指定正整数n的质因数
  static getPrimes(n) {
    let prime = n => {
      // 存储所有的质因数
      let arr = [];
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i);
        }
      }
      return arr;
    };
    return prime(n);
  }
}
