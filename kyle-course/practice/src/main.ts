console.log("hi testing typescript code using bundler vite ");

console.log("testing file 2");

// EP = 6 Assign Type in Typescript - What is Type Inference ?
// in TSC always used lowercase primitive version javascript

let a: number = 4;

console.log(a.toPrecision(3));

// value interference is not allowed which is allowed in js, tsc do not allow the redeclaration of new value to existing variable. example below it will show up error

// example a already declare but if we override new value it will show error
a = "darshan";

// null and undefined are 2 different entity in typescript
// you can define type null and assign value as undefine it will show up error

let b: null = null;
let c: undefined = undefined;

// you cannot undefine or null to data type variable

let d: string = undefined;

console.log(b, c);

// EP = 7 Array Type in Typescript

const array: number[] = [1, 2, 3, 4, 5];

// show up error because your cannot insert string in number array
array.push("darshan");

array.push(8);

console.log("Array ", array);

// type : any which means it will allow any type of data in variable which violate the main purpose of using typescript for type safety so it is not recommended all variable in js is by default any type due to which they all type of data.

// never decalare any keyword while using tsc it it not good approach.
let stringVal: any = "6";

//  if you declare value as undefine or null then by default variable datatype will be set to any.
let numberData = undefined;

console.log(numberData);

console.log(stringVal);

// object declaration in typescript

const object1: {
  studentName: string;
  roll_no: number;
  field: string;
  age: number;
  gender: string;
  isPrivate: boolean;

  // when any property is added externally or optional we decalare its type in (key?:value)
  collegeName?: string;
} = {
  studentName: "Darshan",
  roll_no: 1,
  field: "Science",
  age: 18,
  gender: "Male",
  isPrivate: false,
};

object1.collegeName = "Vartak College";

console.log(object1);
