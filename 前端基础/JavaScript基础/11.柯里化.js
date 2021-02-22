/*
经典题目：实现add(1,2,3,4).valueOf() === add(1)(2)(3)(4).valueOf()
* */

function add() {
  const sum = [...arguments].reduce((a, b) => a + b)
  function foo() {
    return add(sum, ...arguments)
  }
  foo.valueOf = function () {
    return sum
  }
  return foo
}

console.log(add(1, 2, 3, 4).valueOf())
console.log(add(1)(2)(3)(4).valueOf())
