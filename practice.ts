//How do you define a function with type annotations?

// function add(a: number, b: number): number {
//     return a + b;
//   }

  //What is function overloading?

//   function greet(name: string): string;
// function greet(age: number): string;
// function greet(value: string | number): string {
//   return `Hello ${value}`;
// }

// Difference between optional and default parameters?

// function greet(name: string = "Guest") { console.log(name); }
// function sayHi(name?: string) { console.log(name); } // Option

// What are rest parameters?

//function sum(...numbers: number[]) { return numbers.reduce((a, b) => a + b); }

//What is generic programming?

//function identity<T>(value: T): T { return value; }



// type User = { name: string; age: number; };
// type PartialUser = Partial<User>;


//  What is type assertion?

// let value: any = "Hello";
// let strLength: number = (value as string).length;



// const ab :{a:number}[]=[{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }]}

// const sum = ab.reduce((acc,obj)=>acc+obj.a,0)
// console.log(sum)



//. What is utility type?


// Readonly<T> makes all properties of T read-only(can't be modified).

// type User = {
//   name: string;
// };

// const user3: Readonly<User> = {
//   name: "Abhi",
// };

// user3.name = "Babu"; //

// Pick<T, Pick only specific properties from a type.
// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user4: Pick<User, "name" | "email"> = {
//   name: "Abhi",
//   email: "abhi@example.com",
//   // age: 23 // ❌ Not allowed
// };

// Omit<T, Opposite of Pick — omit specific keys.

// const user5: Omit<User, "email"> = {
//   name: "Abhi",
//   age: 23,
//   // email: "..." ❌ Not allowed
// };

// Partial<T> makes all properties of T optional.

// type User = {
//   name: string;
//   age: number;
// };

// const user1: Partial<User> = {
//   name: "Abhi", // ✅ age is optional now
// };
// Required<T> makes all properties of T required.
// type User = {
//   name?: string;
//   age?: number;
// };

// const user2: Required<User> = {
//   name: "Abhi",
//   age: 22, // ✅ all fields must be present
// };
// Record<K,Create an object type with specific keys and value types.
// type Roles = "admin" | "user" | "guest";

// const permissions: Record<Roles, boolean> = {
//   admin: true,
//   user: true,
//   guest: false,
// };
// Exclude<T,  Exclude specific values from a union type.

// type Status = "pending" | "success" | "failed";

// type FinalStatus = Exclude<Status, "pending">;

// Extract<T, Extract only matching members from a union type.

// type A = "a" | "b" | "c";
// type B = "a" | "d";

// type Result = Extract<A, B>; // "a"

