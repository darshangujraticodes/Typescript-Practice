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

// this type declaration has limit it need to be declared individually and for creating new object it need to redeclare again which is exagareaating same code multiple times

// To solve this issue typescript has feature of object interface in this you create one schema interface modal and replicate it for all other projects.

// note name convention in typpe of typescript is CamelCase

type ObjectTypes = {
  studentName: string;
  roll_no: number;
  field: string;
  age: number;
  gender: string;
  isPrivate: boolean;
  // when any property is added externally or optional we decalare its type in (key?:value)
  collegeName?: string;
};

const object1: ObjectTypes = {
  studentName: "Darshan",
  roll_no: 1,
  field: "Science",
  age: 18,
  gender: "Male",
  isPrivate: false,
};

object1.collegeName = "Vartak College";

console.log(object1);

// eg 2

// now this type can decalre to multiple objects
// it is also helpful in nested object data eg

type PersonObjectType = {
  name: string;
  gender: string;
  age: number;
  isGraduate: boolean;
  profession?: string;
  friends: string[];
  address: {
    city: string;
    pincode: number;
    location: string;
  };
};

// interface is the new feature which was released it is simialr to types but has restriction it can only applied to objects only
// interface is declare in following format

// Note it uses keyword interface and does not have equal '=' directly curly braces and key types inside it
interface PersonInterface {
  name: string;
  gender: string;
  age: number;
  isGraduate: boolean;
  profession?: string;
  friends: string[];
  address: {
    city: string;
    pincode: number;
    location: string;
  };
}

const person1: PersonObjectType = {
  name: "Darshan",
  gender: "Male",
  age: 25,
  isGraduate: true,
  friends: ["sahil", "shiva", "sagar"],
  address: {
    city: "Mumbai",
    pincode: 400047,
    location: "Premiere IT Park Dollar Street , Andheri East ",
  },
};

const person2: PersonObjectType = {
  name: "Shreya",
  gender: "Female",
  age: 18,
  isGraduate: false,
  profession: "Student",
  friends: ["Vaishali", "Shrutika", "Ferrini"],
  address: {
    city: "Bangalore",
    pincode: 530068,
    location: "Royal Park Building Ramdas Road Banglore",
  },
};

const person3: PersonInterface = {
  name: "Sagar",
  gender: "Male",
  age: 35,
  isGraduate: true,
  profession: "SEO Manager",
  friends: ["Vaishali", "Rohan", "Ferrini"],
  address: {
    city: "Pune",
    pincode: 411005,
    location: "Royal Park Building Ramdas Road Pune",
  },
};

console.log(
  person1,
  person1.name,
  person2,
  person2.profession,
  person3,
  person3.address.pincode
);

// It is personal whether to use type or interface but type is industry recommended format developer follow
