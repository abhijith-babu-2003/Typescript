// Type Annotations

// Definition: Type annotations specify the type of a variable, function parameter, or return value.

// let age: number = 25;
// let username: string = "Abhijith";
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(5, 10)); // Output: 15

// Generics

// Definition: Generics allow writing reusable and type-safe code that works with multiple data types.

// function identity<T>(value: T): T {
//     return value;
//   }
  
//   console.log(identity<number>(10));  // Output: 10
//   console.log(identity<string>("Hello")); // Output: Hello
  

//   Readonly Modifier

//   Definition: readonly prevents modification of properties in objects or arrays.

//   type Person = {
//     readonly name: string;
//     age: number;
//   };
  
//   let person: Person = { name: "Abhijith", age: 25 };
//   person.age = 26;  // ✅ Allowed
//   // person.name = "Babu"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
  

//   Enums

//   Definition: Enums define a set of named constants.

//   enum Status {
//     Pending,
//     InProgress,
//     Completed
//   }
  
//   let taskStatus: Status = Status.InProgress;
//   console.log(taskStatus); // Output: 1 (Enums are indexed by default)
  

//   Decorators

//   Definition: Decorators modify class behavior at runtime.

//   function Log(target: any, propertyKey: string) {
//     console.log(`Property ${propertyKey} was accessed`);
//   }
  
//   class User {
//     @Log
//     name: string = "Abhijith";
//   }
  

//   Type Assertions

//   Definition: Converts one type to another when we are sure about the type.

//   let input: unknown = "Hello TypeScript";
// let length = (input as string).length;  // ✅ Type Assertion
// console.log(length); // Output: 17

// Keyof Operator

// Definition: Extracts keys from a type as a union.

// type Person = { name: string; age: number };
// type Keys = keyof Person;  // "name" | "age"


// Partial

// Definition: Makes all properties of a type optional.

// type User = { name: string; age: number };
// const updateUser = (user: Partial<User>) => {
//   console.log(user);
// };
// updateUser({ name: "Abhijith" });  // ✅ Allowed


// ReturnType

// Definition: Extracts the return type of a function.

// function getUser() {
//     return { name: "Abhijith", age: 25 };
//   }
  
//   type UserType = ReturnType<typeof getUser>;  // { name: string; age: number }
  

//   Mapped Types

//   Definition: Creates a new type by transforming properties of another type.

//   type User = { name: string; age: number };
// type OptionalUser = { [K in keyof User]?: User[K] };  // Makes all properties optional

// Record

// Definition: Defines an object type with keys of one type and values of another.

// type Users = Record<string, number>;
// const userAges: Users = { Abhijith: 25, Babu: 30 };

// Infer

// Definition: Extracts types within conditional types.

// type ReturnTypeInfer<T> = T extends (...args: any[]) => infer R ? R : never;


// Type Alias

// Definition: Creates a custom type name.


// type User = { name: string; age: number };
// let user: User = { name: "Abhijith", age: 25 };


// Intersection (&)

// Definition: Combines multiple types into one.

// type A = { name: string };
// type B = { age: number };
// type AB = A & B;

// const person: AB = { name: "Abhijith", age: 25 };

// noImplicitAny

// Definition: If noImplicitAny is true in tsconfig.json, TypeScript enforces explicit types.

// function greet(name) {  // ❌ Error in TypeScript
//     return `Hello, ${name}`;
//   }
  

//   never

//   Definition: Represents a type that never returns.

//   function throwError(message: string): never {
//     throw new Error(message);
//   }
  

//   Omit

//   Definition: Removes properties from a type.

//   type User = { id: number; name: string; age: number };
// type UserWithoutAge = Omit<User, "age">;  // { id: number; name: string }


// Mixins

// Definition: Combines multiple class functionalities.

// class CanWalk {
//     walk() {
//       console.log("Walking...");
//     }
//   }
  
//   class CanEat {
//     eat() {
//       console.log("Eating...");
//     }
//   }
  
//   class Person implements CanWalk, CanEat {
//     walk!: () => void;
//     eat!: () => void;
//   }
  
//   applyMixins(Person, [CanWalk, CanEat]);
  
//   function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach((baseCtor) => {
//       Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//         derivedCtor.prototype[name] = baseCtor.prototype[name];
//       });
//     });
//   }
  
//   const p = new Person();
//   p.walk();  // Output: Walking...
//   p.eat();  // Output: Eating...

  
//   Tuples

//   Definition: Defines an array with fixed length and types.

//   let user: [string, number] = ["Abhijith", 25];  // ✅ Allowed


// Example usage of Record

// type Role ="admin"|"user"
// type permissions = Record<Role,string[]>

// const roles:permissions={
//     admin:["read","write"],
//     user:["read"]
// }
// console.log(roles)


// type Users = Record<string, number>;
// const userAges: Users = { Abhijith: 25, Babu: 30 };
