
function foo() {
  let step = 0
  function bar() {
    return step++
  }
  return bar
}

const fn = foo()
console.log(fn()) // 0
console.log(fn()) // 1
console.log(fn()) // 2

/*
扩展：实现add(1,2,3).valueOf() === add(1)(2)(3).valueOf()
* */

function add() {
  let sum = [...arguments].reduce((a, b) => a + b, 0)
  function foo() {
    return add(sum, ...arguments)
  }
  foo.valueOf = function () {
    return sum
  }
  return foo
}

console.log(add(1, 2, 3).valueOf()) // 6
console.log(add(1)(2)(3).valueOf()) // 6
