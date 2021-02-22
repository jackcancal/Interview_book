function Foo(name) {
  this.name = name
}

const obj = new Foo('obj')

console.log(obj['__proto__'] === Foo.prototype) // true
