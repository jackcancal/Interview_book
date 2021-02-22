Function.prototype.myBind = function () {
  const fn = this
  const _this = arguments[0]
  _this.fn = fn
  function foo() {
    const _r = _this.fn(...arguments)
    delete _this.fn
    return _r
  }
  return foo
}

function foo() {
  console.log(arguments)
  console.log(this)
  return 7
}
console.log(foo.myBind({a:1})(1,2,3))
