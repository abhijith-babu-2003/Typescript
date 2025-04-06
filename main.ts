
//Infer types (Implicit types)

// let userNAME = "John Doe";
// let subscribers = 399_000;
     
//defining types explicitly

// let userName: string = "John Doe";
// let subscribers: number = 399_000;
// let isActive: boolean = true;
// let skills :string[]= ["HTML", "CSS", "JavaScript"];
// let count : number [] = [1, 2, 3, 4, 5];
// let emptyArray :[] = [];

// let userDetails: {name:string; age:number;salary:number} ={
//      name : "John Doe",
//      age :49,
//      salary :2000
// }




//  Interface

// interface  Details {
//     name: string;
//     age: number;
//     salary: number;
//     getName: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }

// Type 

// type Details ={
//     name: string;
//         age: number;
//         salary: number;
//         getName: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }


//union/optional types

// type Details ={
//     name: string;
//         age: number|string;
//         salary: number;
//         getName?: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }

// //union
// let skills: (string|number)[] = ["HTML", "CSS", "JavaScript",19,34,55];

// //optional
// let salary: number | undefined = 2000;

// interface Details {
//     salary?: number;
// }
// let emp :Details={salary:2444}


//functions


// type Details ={
//     name: string;
//         age: number|string;
//         salary: number;
//         getName?: () => void;
// }

// let userDetails: Details ={
//      name : "John Doe",
//      age :49,
//      salary :2000,
//         getName: function () {
//             console.log(this.name);
//         }
// }

// function getUserName(userDetails:Details) {
//     return userDetails.age
// }

// getUserName(userDetails);
//---------------------------------------------------
// function names ({name, age, salary}: {name:string; age:number; salary:number}) {
//     return name
// }
// names({name:"John Doe", age: 49, salary: 2000})

// interface Details {
//     name:string;
//     age:number;
//     salary:number;
// }

// function names ({name}:Details){
//     return name;
// }
// console.log(names({name:"John Doe", age: 49, salary: 2000}))


//Named types
// type status = "active" | "inactive" | "pending";

//generics--------------------------------------------

// function getage<T>(age:T):T {
//     return age;
// }
// console.log(getage('49'))
// console.log(getage(30))
//----------------------------------
// type userDetail ={
//     name:string;
//     age :number
// }


// type adminDetail ={
//     firstname:string;
//     role :string
// }

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     firstname:'abijit',
//     role:'admin',
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)
//------------------------------------------------------------



// type userDetail ={
//     name:string;
//     age :number
// }


// type adminDetail = userDetail &{    userdetails nte admindetails lek merge akkii
//     role :string;
// }

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     name:'abijit',
//     role:'admin',
//     age:45
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)

//-------------------------------------------------------------

// type userDetail ={
//     name:string;
//     age :number
// }


// type adminDetail = userDetail --- admindetails lek userdetails kodut

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     name:'abijit',
//     age:45
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)

//-------------------------------------------------------------



// interface userDetail {
//     name:string;
//     age :number
// }


// interface adminDetail extends userDetail {}

// const userDetails:userDetail ={
//     name:'abijit',
//     age:23,
// }


// const adminDetails:adminDetail ={
//     name:'abijit',
//     age:45
// }

// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetail>(userDetails)
// const adminvalue = getDetails<adminDetail>(adminDetails)

// console.log(uservalue)
// console.log(adminvalue)




//ennums

// enum StatusType{
//   pending =1,
//   complete,
//   failed
// }
// function getstatus (message:string,status:StatusType){
//     console.log(status)
// }
// getstatus(StatusType.complete)

//enum
// enum Color  {red=3, green, blue}
// let c:Color = Color.green
// console.log(c);

// as const 

// let userName  = 'debug media' as const
// userName = 'debug media'

//keyof/typeof


// type Person = { name: string; age: number };
// type Keys = keyof Person;

// type person ={
//   name :string,
//   age:number
// }
// type personkeys = keyof person
// let key :personkeys[] =["name","age"]
// console.log(key)

// utility 
// type user ={
//     name :string;
//     age :number
// }
// const userDetails :Readonly<user>={
//     name:'dadsasd',
//     age:44
// }
// userDetails.name
// userDetails.age =323

//Partial

// type user ={
//     name :string;
//     age :number
// }
// const userDetails :Partial<user>={
//     name:'dadsasd',
//     age:44
// }

//required 

// type user ={
//     name :string;
//     age ?:number
// }
// const userDetails :Required<user>={
//     name:'dadsasd',
//     age:44
// }

//pick

// type user ={
//     name :string;
//     age :number;
//     salary:number
 
// }
// const user :Pick<user,'name'|'age'>={
//     name:'dadsasd',
//     age:44
// }

//omit

// type user ={
//     name :string;
//     age :number;
//     salary:number
 
// }
// const user :Omit<user,'salary'>={
//     name:'dadsasd',
//     age:44
// }


//union nte case il 
//exclude

// type StatusType ='pending'|'completed'|'failed'
// const status :Exclude<StatusType ,'pending'> = ''





//  Inheritance
// class animal {
//     speak():void{
//         console.log("Animal speaks");
        
//     }
// }
// class Cat extends animal{
//     speak():void{
//         console.log("Cat barks");
//     }
// }
// const myCat = new Cat()
// myCat.speak()


// function fetchData(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched using Promise!");
//     }, 1000);
//   });
// }

// fetchData().then(data => {
//   console.log(data);
// });


// function fetchDataAsync(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched using async/await!");
//     }, 1000);
//   });
// }

// async function getData() {
//   const data = await fetchDataAsync();
//   console.log(data);
// }

// getData();


// getData();

//Function Overloading:
// function fetchData(id:number):number;
// function fetchData(id:string):string;

// function fetchData(id :any):any{
//     return id
// }

// console.log(fetchData(443))




//unknown vs any

function handleInput(input: unknown) {
    if (typeof input === "string") {
      console.log("String length:", input.length);
    } else if (typeof input === "number") {
      console.log("Square:", input * input);
    }else if(typeof input ==="boolean"){
      console.log(input)
    }else if(Array.isArray(input) ){
      console.log(input)
    } else {
      console.log("Unknown type");
    }
  }
  handleInput("hello");
  handleInput(7);
  handleInput(true);
  handleInput([1, 2, 3]);
  handleInput(null);
  handleInput({ name: "Abhi" });



  function add (num1 :number ,num2?:number):number{
    if(num2){
      return num1+num2
    }else{
      return num1
    }
  }
  console.log(add(3,3))
  
  

  function adds (...num:number[] ):number{
  return num.reduce((acc,curr)=>acc+curr,0)
  }
  console.log(adds(1,2,3,4,5))
  
  
  interface faces {
    name:number
  }
  let user :faces ={
   name :34
  }


  //decorators

  function First() {
    console.log("First factory");
    return function (target: any) {
      console.log("First decorator");
    };
  }
  @First()
  class Demo {}

  //maped types]
  
// type Readonly<T>={
//   readonly[k in keyof T]?:T[k]
// }

//condiytional types

// type IsString<T> = T extends string ? "Yes" : "No";

// type A = IsString<string>;  // 'Yes'
// type B = IsString<number>;  // 'No'
