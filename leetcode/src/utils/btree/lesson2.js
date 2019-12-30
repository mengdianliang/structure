/* eslint-disable no-console */
// 搜索二叉树
class SearchTree {
  constructor(val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}
class TreeByOrder {
  constructor(data) {
    let root = new Node(data.shift());
    // 遍历所有的数据，逐渐插入到当前这棵搜索树中去
    data.forEach(item => {
      this.insert(root, item);
    });
    return root;
  }
  insert(node, data) {
    if (node.val > data) {
      if (node.left === undefined) {
        node.left = new Node(data);
      } else {
        this.insert(node.left, data);
      }
    } else {
      if (node.right === undefined) {
        node.right = new Node(data);
      } else {
        this.insert(node.right, data);
      }
    }
  }
  static walk(root) {
    if (!root.left && !root.right) {
      return true;
    } else if (
      (root.left && root.val < root.left.val) ||
      (root.right && root.val > root.right.val)
    ) {
      return false;
    } else {
      return TreeByOrder.walk(root.left) && TreeByOrder.walk(root.right);
    }
  }
}
export default TreeByOrder;
export { SearchTree };
