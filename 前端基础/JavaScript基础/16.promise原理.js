const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
  const _this = this;
  this.state = PENDING;
  this.value = undefined; // 成功的结果
  this.reason = undefined; // 失败的原因
  this.onFulfiled = []; // 成功的回调
  this.onRejected = []; // 失败的回调
  function resolve(value) {
    if (_this.state === PENDING){
      _this.state = FULFILLED;
      _this.value = value
      _this.onFulfiled.forEach(fn => fn(value))
    }
  }
  function reject(reason) {
    if (_this.state === PENDING){
      _this.state = REJECTED;
      _this.reason = reason
      _this.onRejected.forEach(fn => fn(reason))
    }
  }
  // executor可能会出现异常
  try {
    executor(resolve, reject);
  }catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.state === FULFILLED){
    typeof onFulfilled === 'function' && onFulfilled(this.value)
  }
  if (this.state === REJECTED){
    typeof onRejected === 'function' && onRejected(this.value)
  }
  if (this.state === PENDING){
    typeof onFulfilled === 'function' && this.onFulfiled.push(onFulfilled)
    typeof onRejected === 'function' && this.onRejected.push(onRejected)
  }
}

module.exports = MyPromise;

new MyPromise(resolve => {
  setTimeout(function () {
    resolve(1);
  }, 1000)
}).then(v => {
  console.log(v)
})