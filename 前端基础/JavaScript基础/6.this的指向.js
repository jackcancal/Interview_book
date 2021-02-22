// 1.指向全局
function foo1() {
  console.log(this) // window或者global
}
// foo1()
// 2.指向调用的对象

const obj2 = {
  foo2(){
    console.log(this) // obj2
  }
}
// obj2.foo2()

//3.指向触发DOM事件的DOM对象
/*document.body.addEventListener('click', function () {
  console.log(this) // DOM中的body对象
})*/

//4.指向构造函数的实例

function Foo4() {
  console.log(this) // Foo4 {}
}
new Foo4()

//5.指向被call/apply/bind注入的对象

/*
扩展：
* */

var value = 2

var obj9 = {
  value: 1,
  foo: function (){
    console.log(this)
  }
};
let a = (obj9.foo);
a(); // window / global
(obj9.foo)(); // obj9
(false || obj9.foo)() // window / global

// 题解： https://github.com/mqyqingfeng/Blog/issues/7
