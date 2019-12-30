<template>
  <div id="app">
    <p>{{word}}</p>
    <p>{{repeatWord}}</p>
    <p>{{phoneGroup}}</p>
    <p>{{flowerGroup}}</p>
    <p>{{geleiGroup}}</p>
    <p>{{subLoopGroup}}</p>
    <p>{{sortBuble}}</p>
    <p>{{maxGap}}</p>
    <p>{{oddEven}}</p>
    <p>{{ipArr}}</p>
    <p>{{words}}</p>
    <p>{{baseBall}}</p>
    <p>{{rect}}</p>
    <p>{{task}}</p>
    <p>{{chain}}</p>
    <p>{{circleChain}}</p>
    <p>{{matrix}}</p>
    <p>{{matrixRotate}}</p>
    <p>{{isTree}}</p>
    <p>{{isOrderTree}}</p>
    <p>{{heap}}</p>
    <p>{{price}}</p>
    <p>{{step}}</p>
  </div>
</template>

<script>
import reverseWord from './utils/string/lesson1'
import repeatLen from './utils/string/lesson2'
import phoneGroup from './utils/array/lesson1'
import flowerGroup from './utils/array/lesson2'
import geleiGroup from './utils/array/lesson3'
import subLoopGroup from './utils/array/lesson4'
import sortBuble from './utils/sort/lesson1'
import maxGap from './utils/sort/lesson2'
import oddEven from './utils/sort/lesson3'
import ipArr from './utils/recur/lesson1'
import words from './utils/recur/lesson2'
import baseBall from './utils/stack/lesson1'
import rect from './utils/stack/lesson2'
import task from './utils/queue/lesson2'
import sort, { NodeList } from './utils/chain/lesson1'
import isCircle, { NodeList as NodeList2 } from './utils/chain/lesson2'
import matrix from './utils/matrix/lesson1'
import matrixRotate from './utils/matrix/lesson2'
import Tree, { TreeNode } from './utils/btree/lesson1'
import TreeByOrder, { SearchTree } from './utils/btree/lesson2'
import Heap from './utils/heap/lesson1'
import price from './utils/greed/lesson1'
import step from './utils/dp/lesson1'
export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      word: '',
      repeatWord: [],
      phoneGroup: [],
      flowerGroup: [],
      geleiGroup: [],
      subLoopGroup: '',
      sortBuble: [],
      maxGap: '',
      oddEven: [],
      ipArr: [],
      words: [],
      baseBall: '',
      rect: '',
      task: '',
      chain: [],
      circleChain: '',
      matrix: [],
      matrixRotate: [],
      isTree: '',
      isOrderTree: '',
      heap: [],
      price: '',
      step: ''
    }
  },
  mounted () {
    this.getReverseWord()
    this.getRepeatLen()
    this.getPhoneGroup()
    this.getFlowerGroup()
    this.getGeleiGroup()
    this.getSubLoopGroup()
    this.getSortBuble()
    this.getMaxGap()
    this.getOddEven()
    this.getIpArr()
    this.getWords()
    this.getBaseBall()
    // this.getRect()
    this.getTask()
    this.getChainList()
    this.getCircleChain()
    this.getMatrix()
    this.getMatrixRotate()
    this.getIsTree()
    this.getOrderTree()
    this.getHeap()
    this.getPrice()
    this.getStep()
  },
  methods: {
    //反转单词 
    getReverseWord () {
      this.word = reverseWord('my name is zhangsan')
    },
    // 重复单词
    getRepeatLen () {
      this.repeatWord = repeatLen('00110011')
    },
    // 号码组合
    getPhoneGroup () {
      this.phoneGroup = phoneGroup('234')
    },
    // 种花
    getFlowerGroup () {
      this.flowerGroup = flowerGroup([1, 1, 1, 1, 0, 0, 0], 4)
    },
    // 格雷编码
    getGeleiGroup () {
      this.geleiGroup = geleiGroup(4)
    },
    // 重复子串
    getSubLoopGroup () {
      this.subLoopGroup = subLoopGroup('abcabcabc')
    },
    // 冒泡排序
    getSortBuble () {
      this.sortBuble = sortBuble([2, 6, 5, 3, 1, 9, 7])
    },
    // 获取最大间距
    getMaxGap () {
      this.maxGap = maxGap([2, 6, 5, 3, 1, 9, 7])
    },
    // 奇数偶数归属
    getOddEven () {
      this.oddEven = oddEven([2, 6, 7, 8, 5])
    },
    // 从字符串获取有效IP
    getIpArr () {
      // this.ipArr = ipArr('25525511135')
      // this.ipArr = ipArr('010010')
      this.ipArr = ipArr('1111111111111111111111111111')
    },
    getWords () {
      this.words = words('barfoothefoobarman', ['foo', 'bar'])
    },
    // 棒球
    getBaseBall () {
      this.baseBall = baseBall(['5', '-2', '4', 'C', 'D', '9', '+', '+'])
    },
    // 矩阵
    getRect () {
      this.rect = rect([
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      ])
    },
    // 任务调度
    getTask () {
      this.task = task(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)
    },
    // 链表
    getChainList () {
      let head = new NodeList([4, 1, 3, 2, 7, 9, 10, 12, 6]);
      // eslint-disable-next-line no-console
      sort(head);
      let res = [];
      let next = head;
      while (next) {
        res.push(next.val);
        next = next.next;
      }
      // eslint-disable-next-line no-console
      console.log(res)
      this.chain = res;
    },
    // 环形链表
    getCircleChain () {
      let head = new NodeList2([6, 1, 2, 5, 7, 9])
      // eslint-disable-next-line no-console
      head.next.next.next.next.next.next = head.next
      this.circleChain = isCircle(head)
    },
    // 螺旋矩阵
    getMatrix () {
      let input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      this.matrix = matrix(input)
    },
    // 矩阵翻转
    getMatrixRotate () {
      let input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      this.matrixRotate = matrixRotate(input)
    },
    // 是否是对称的二叉树
    getIsTree () {
      let root = new TreeNode([1, 2, 2, 3, 4, 4, 3])
      this.isTree = Tree.isSymmetry(root)
    },
    // 搜索二叉树
    getOrderTree () {
      let root = new SearchTree([1, 2, 3, 4, 7, 8, 9])
      this.isOrderTree = TreeByOrder.walk(root)
    },
    // 最大堆排序
    getHeap () {
      // let heap = new Heap([1, 10, 9, 5, 3, 11])
      // this.heap = heap.sort()
      let heap = new Heap('chcaa');
      this.heap = heap.toString()
    },
    // 贪婪获取最大利润
    getPrice () {
      this.price = price([7, 1, 5, 3, 6, 4])
    },
    //
    getStep () {
      this.step = step([[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]])
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
