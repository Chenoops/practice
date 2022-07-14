interface IPerson {
  firstName:string,
  lastName:string,
  sayHi: ()=>string
}

var customer: IPerson = {
  firstName:"Tom",
  lastName:"Lee",
  sayHi: ():string => {return "Hi,here"}
}
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName:"Jim",
  lastName:"Hanks",
  sayHi: (): string=>{return "Hey"}
}
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
0