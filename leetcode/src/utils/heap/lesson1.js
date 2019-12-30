/* eslint-disable no-console */
class Heap {
  constructor(str) {
    let map = new Map();
    str.split("").forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    });
    this.map = map;
    this.data = Array.from(map.values());
  }
  sort() {
    let iArr = this.data;
    let n = iArr.length;
    if (n <= 1) {
      return iArr;
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n);
      }
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j);
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1);
      }
      return iArr;
    }
  }
  // 输出
  toString() {
    let arr = this.sort();
    let str = [];
    while (arr.length) {
      let top = arr.pop();
      console.log(this.map);
      for (let [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v));
          this.map.delete(k);
          break;
        }
      }
    }
    return str.join("");
  }
  // 交换两个元素方法
  static swap(arr, a, b) {
    if (a === b) {
      return;
    }
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  // 构建最大堆
  static maxHeapify(arr, i, size) {
    // 左节点索引
    let l = i * 2 + 1;
    // 右节点索引
    let r = i * 2 + 2;
    let largest = i;
    if (l <= size && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r <= size && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest !== i) {
      Heap.swap(arr, i, largest);
      Heap.maxHeapify(arr, largest, size);
    }
  }
}
export default Heap;
