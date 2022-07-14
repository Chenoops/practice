//  元组
let x: [string,number]
x = ['sun',1]
// x=[1,'sun']
console.log(x[0])

// 数组
let arr : number[]= [1,2]

// 枚举
enum Color {Pink,Green,Blue}
let c1: Color = Color.Blue
console.log(c1)

// any
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false

// never 
// never可以是抛出的异常情况
function error (message: string): never{
  throw new Error(message);
}
// function error(message: string) : never {
//   throw new Error(message);
// }
// never类型可以赋值给数据类型
let y: number
y = (()=>{throw new Error('exception')})()
// never类型可以赋值给never类型
let z : never
z = (()=>{throw new Error('exception')})()

//Void 没有类型
function warnUser(): void {
  console.log("Warning");
}
let unusable: void = undefined


