Function.prototype.myCall = function () {
  const fn = this;
  const _this = arguments[0]
  _this.fn = fn
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  const _r = _this.fn(...args)
  delete _this.fn
  return _r
}

Function.prototype.myApply = function () {
  const fn = this;
  const _this = arguments[0]
  _this.fn = fn
  const args = arguments[1]
  const _r = _this.fn(...args)
  delete _this.fn
  return _r
}
