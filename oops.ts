
class Car {
    brand : string
    
    constructor(brand : string){
      this.brand = brand
    }
    showBrand(){
      console.log(`car brand is: c ${this.brand}`)
    }
  }
  let car1 = new Car("Toyota")
  car1.showBrand()

//   interface Person{
//     name:string;
//     age:number
// }

// class Student implements Person{
//     name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.age = age;
//         this.name =name
//     }
//     showout(){
//         console.log(`${this.name} age is :${this.age}`)
//     }
// }
// let c1 = new Student("abhi",22)
// c1.showout()
 

  // Method Overriding
  
class Parent {
    greet(){
      console.log("helloo from parent")
    }
  }
  class child extends Parent{
    greet(){
      console.log("heloo from child")
    }
  }
  
  let c = new child()
  c.greet()


  //method overloading


  class MathOperation{
    add (a:number,b:number,c?:number):number{
      if(c){
        return a+b+c
      }else{
        return a+b
      }
    }
  }
  let math = new MathOperation()
  console.log(math.add(1,2,3))
  console.log(math.add(1,2))

  // class Logger {
  //   log(message: string): void;
  //   log(id: number): void;
  //   log(value: string | number): void {
  //     console.log("Logged:", value);
  //   }
  // }
  
  // const logger = new Logger();
  // logger.log("Hello");
  // logger.log(123);
  


  //encapsulation

  
class Person {
    private name :string
    constructor(name:string){
      this.name = name
    }
    getName(){
      return this.name
    }
  }
  
  let p1 = new Person("john")
  console.log(p1.getName())


  //inheritance

  class Animal {
    sound :string
  
    constructor(sound : string){
      this.sound = sound
    }
    makeSound(){
      console.log(this.sound)
    }
  }
  
  class Dog extends Animal{
    constructor(){
      super("wooffff")
    }
  }
  
  let dog = new Dog()
  dog.makeSound()

//multiple inheritance
  interface A {
    methodA(): void;
  }
  
  interface B {
    methodB(): void;
  }
  
  class C implements A, B {
    methodA(): void {
      console.log("Method A");
    }
  
    methodB(): void {
      console.log("Method B");
    }
  }
  const obj = new C();
  obj.methodA(); // Output: Method A    
    obj.methodB(); // Output: Method B

    
  //polymorphism

  class Shape {
    draw(){
      console.log("drawing a shape")
    }
  }
  class Circle extends Shape{
    draw(){
      console.log("drawing a circle")
    }
  }
  
  let s1 = new Shape()
  s1.draw()

  
let c1 = new Circle();
c1.draw();

//abstract class


// abstract class vehicle {
//     abstract move() : void
//   }
//   class Car extends vehicle{
//     move(){
//       console.log("car is moving")
//     }
//   }
//   let myCar = new Car()
//   myCar.move()


// interface Vehicle{
//   move():void
  
// }
// class Car implements Vehicle{
//     move(){
//         console.log("car is moveing")
//     }
// }
// const mycar =new Car()
// mycar.move()


//static method

// class utility {
//     static pi = 3.14
  
//     static square(num :number){
//       return num * num
//     }
//   }
  
//   console.log(utility.pi)
//   console.log(utility.square(5))




//acces modifiers

// class Student {
//   public name: string;
//   private id: number;
//   protected marks: number;

//   constructor(name: string, id: number, marks: number) {
//     this.name = name;
//     this.id = id;
//     this.marks = marks;
//   }

//   public showName() {
//     console.log(this.name);     // ✅
//     console.log(this.id);       // ✅
//     console.log(this.marks);    // ✅
//   }
// }

// const s = new Student("Abi", 101, 90);
// console.log(s.name); // ✅
// // console.log(s.id); // ❌ Error: private
// // console.log(s.marks); // ❌ Error: protected


//getters and setters

// class Employee {
//   private _salary: number = 0;

//   get salary(): number {
//     return this._salary;
//   }

//   set salary(value: number) {
//     if (value >= 0) {
//       this._salary = value;
//     }
//   }
// }

// const emp = new Employee();
// emp.salary = 5000;
// console.log(emp.salary); // 5000
