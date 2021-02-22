// 1.原型式继承
function Father1() {
  this.list = [1, 2]
}
Father1.prototype.getName = function () {
  return 'father1'
}

function Child1() {

}

Child1.prototype = new Father1()
const c11 = new Child1()
const c12 = new Child1()
c12.list.push(3)
console.log(c11.getName()) // father1
console.log(c11.list) // [ 1, 2, 3 ]
console.log(c12.list) // [ 1, 2, 3 ]
/*
缺点：引用类型的属性被共享了, 不能穿参
* */


//2.借用构造函数继承

function Father2() {
  this.list = [1,2]
}
Father2.prototype.getName = function (){
  return 'father2'
}

function Child2() {
  Father2.call(this)
}

const c21 = new Child2()
const c22 = new Child2()
c22.list.push(3)
console.log(c21.list) //[ 1, 2 ]
console.log(c22.list) //[ 1, 2, 3 ]

/*
缺点：每次创建实例都会调一次父函数的方法
* */

//3.组合继承

function Father3() {
  this.list = [1,2]
}
Father3.prototype.getName = function () {
  return 'father3'
}

function Child3() {
  Father3.call(this)
}

Child3.prototype = new Father3()
Child3.prototype.constructor = Child3

const c31 = new Child3()
const c32 = new Child3()
c32.list.push(4)
console.log(c31.list) // [1, 2]
console.log(c32.list) // [1, 2, 4]
/*
缺点：父函数被调用多次，子函数的原型上多保存了一份父函数的实例
* */

//4.原型式继承
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
// 等同 Object.create
/*
缺点：和原型链继承一样
* */

//5.寄生式继承（创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。）
function createObj (o) {
  const clone = Object.create(o);
  clone.sayName = function () {
    console.log('hi');
  }
  return clone;
}

/*
缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
* */

//6.寄生式组合继承
/*
  通过借用构造函数来继承属性；
  通过原型链来继承方法。
* */

function myExtends(Father, Child) {
  const prototype = Object.create(Father.prototype)
  prototype.constructor = Child
  Child.prototype = prototype
  return Child
}

function Father6(){
  this.list = [1,2]
}
function Child6() {
  Father6.call(this)
}
myExtends(Father6, Child6)

const c61 = new Child6()
const c62 = new Child6()
c62.list.push(6)
console.log(c61)
console.log(c62)



