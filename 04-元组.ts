// 元组运算
var tuple = [10,"hello","ts","js"]
console.log("添加前元素个数："+tuple.length);
tuple.push(12)
console.log("添加后元素个数:"+tuple.length);
console.log("删除前元素个数:"+tuple.length);
console.log(tuple.pop()+"元素被删除");
console.log("删除后元素个数:"+tuple.length);
// 更新
var tuple1 = [10,"hello","ts","js"]
tuple1[1]=0
console.log(tuple1[1]);
// 解构
var a = [10,"tuple"]
var [b,c] = a
console.log(b);
console.log(c);
