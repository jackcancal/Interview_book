function myNew(F, ...args) {
  const o = Object.create(F.prototype)
  F.call(o, ...args)
  return o
}

function Foo(name) {
  this.list = [1, 2]
  this.name = name
}
Foo.prototype.getName = function (){
  return this.name
}
let o1 = new Foo('o1')

console.log(o1.getName())
let o2 = myNew(Foo, 'o2')
o2.list.push(3)
console.log(o1)
console.log(o2)
