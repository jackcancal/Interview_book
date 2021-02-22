function Foo() {

}
const f = new Foo()
console.log(f instanceof Foo) // true
console.log(f instanceof Object) // true
console.log(Foo instanceof Object) // true
console.log(Foo instanceof Function) // true
console.log(function () {} instanceof Object) // true
console.log({} instanceof Function) // false
/*
instanceof是基于原型链查找的，只要在原型链上就是true
* */
