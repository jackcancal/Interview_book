var a = 1
function foo() {
  var a = 3, b = 4
  console.log(a) // 3
  function bar() {
    console.log(b) // 4
  }
  bar()
}
foo()
