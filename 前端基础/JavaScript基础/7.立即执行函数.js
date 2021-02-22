(function () {
  console.log(this)
})()
/*
  开辟单独的执行上下文环境，外部对象无法我访问到IIFE内部的变量
* */
