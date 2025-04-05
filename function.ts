
// function greet (name:string):string{
//   return `heloo ${name}`
// }
// console.log(greet("abhijith"))

// function greet (name:string,age?:number):string{
//   return age ? `heloo${name},age: ${age}` :`heloo ${name}`
// }
// console.log(greet("abhijith"))
// console.log(greet("abhijith",22))

// function greet (name:string ,age:number=23):string{
//   return `helo${name},age:${age}`
// }
// console.log(greet("Abhi"));
// console.log(greet("Abhi", 25));

// const add =(a:number,b:number):number=>a+b
// console.log(add(2,3))

// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// function identy<T>(value :T):T{
//   return value
// }
// console.log(identy<string>("eheeq"))


// function operate(a: number, b: number, callback: (x: number, y: number) => number): number {
//   return callback(a, b);
// }

// const result = operate(5, 3, (x, y) => x * y);
// console.log(result); 