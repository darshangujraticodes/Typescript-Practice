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

// -----------------------------

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

// It is personal choice whether to use type or interface but type is industry recommended format for developers

// --------------------

// typescript functions

function sum(a: number, b: number) {
  return a + b;
}

sum("43343", "sdsfd"); // it wil give error because paramter data type is already defined which is number only

sum(45, 78);

// but what is your function does not have return value so how to handle that

// function without return statment are been set to void

// it is different from undefine vs void :

function printName(name: string): void {
  console.log(name);
}

printName("Harry Potter");

// now we can also define type of return statement in function of tsc but it is not recommended to provide type of return statemnt in funciton example is below

// before curly braces i have explicitly define number datatype to return statement and now if function will return string or any other form of data it will show up error example below
// But it is not recommended to declare explicitly but depend on the use case you can use to maintain code functionality.

function subtract(num1: number, num2: number): string {
  let res = num1 - num2;

  return res.toString();
}

subtract(85, 96);

//  passing object parameter in functions

function personData(person: { name: string; age: number }) {
  return person.name;
}

// this will give proper output but if we add key argument of obejct in calling function it will show Up error because declare function has only 1 key parameter which is name. which is unique behaviour of object as parameter

personData({ name: "darshan", age: 22 });

personData({ name: "Harry", profession: "student" });

// but if we declare object seapratly and pass it on to function argument it not show up error

const studentInfo = { name: "Hermione", age: 20, profession: "Student" };

personData(studentInfo);

// this is what unique behaviour of object while passing data as argument in so always declare object separatly

// optional parameter in function

function printPersonData(
  name: string,
  options?: { age: number; profession: string }
) {
  console.log(name, options?.age, options?.profession);
}

const moreInfo = { age: 24, profession: "student", hobby: "reading books" };

printPersonData("Ron Weasly", moreInfo);

printPersonData("Harmoine");

// -----------

// Destructure Parameter to set default parameter if data is not pass

// thiss destructure and default value option is better than undefine

type StudentOptions = {
  house?: string;
  hobby?: string;
};

function printStudentData(
  rollNo: number,
  name: string,
  gender: string,
  { house = "Red", hobby = "Playing Chess" }: StudentOptions = {}
) {
  console.log(rollNo, name, gender, house, hobby);
}

printStudentData(1, "Harry", "Male");

printStudentData(2, "Harmoine", "female", {
  house: "Green",
  hobby: "Reading Books",
});

// Rest Paramter in function

function sumData(...nums: number[]) {
  console.log(nums);

  let add = 0;
  for (let k of nums) {
    add = k + add;
  }
  console.log("Sum of Array Values = ", add);
}

sumData(1, 2, 5, 52, 45, 5);

//  callback function declaration using typescript

function sumOfInputNumber(
  n1: number,
  n2: number,
  // note here after arrow define the data type of return statments
  sumCallBack: (sum: number) => void
) {
  sumCallBack(n1 + n2);
}

sumOfInputNumber(45, 96, (sum) => {
  console.log("call back function sum = ", sum);
});

// example 2

// here parameter is accepted in string but while returning output it should be in number
type PrintCallBackFunc = (age: string) => number;

function fData(age: string): number {
  return parseInt(age);
}

fData("54");
console.log();

// modifier and its types

// optional Modifier

// union modifier

// When we want to store data of multiple type in single variable we take use of unione and in this we will explicitly mention variable can store given type of data in variable but form this multiple only one type of data can be store at a time

// it is denoted by pipe(|) which also denote or operator

let st_id: string | number = "Darsh";

st_id = 7;

// but this will lead to error becoz boolean is not defined while declaration
st_id = true;

console.log("union modifier = ", st_id, typeof st_id);

// if you notice under the hood optional operator also use union
// eg are as follows

// union is can only be applied in types and cannot be implement in interface

// union has the feature of not only defining data type but also different values from options ex has follows

type TodoType = {
  id: string | number;
  name?: string;
  status: "Completed" | "Incomplete" | "Stuck";
  taskType?: string;
};

const todo1: TodoType = {
  id: 423432,
  name: "Harry Parker",
  // status: "rwerwer", -> this will give u error becoz it won't allow values from not defined options in union
  status: "Completed",
  taskType: "Important",
};

console.log(todo1);

// also can combine different objects as union

type ComboData = TodoTaskData | PersonData;

type TodoTaskData = {
  taskName: string;
  type: "Important" | "Urgent" | "Ignored" | "Delegate";
};

type PersonData = {
  personName: string;
  department: string;
};

const todoDetails: ComboData = {
  taskName: "Processing Salary",
  personName: "Akash",
  department: "Accounts",
  type: "Important",
};

console.log(todoDetails);

// hover on tasktype you will get "string | undefine" which is union

//  Typescript Intersection

type Person = {
  name: string;
  age: number;
};

type personWithID = Person & { id: number };

const personIntersectionInfo: personWithID = {
  name: "Darshan",
  age: 18,
  id: 4234234,
};

console.log("Intersection data", personIntersectionInfo);

// readonly is used when you dont want to allow to modify object key values
// example shown below

type PersonDataType = {
  readonly id: number; // sp now you cannot edit id value
  name: string;
  age: number;
};

const data: PersonDataType = {
  id: 878,
  name: "Darshan",
  age: 25,
};

data.id = 323224; // show up error cannot assign new value becoz it is readonly property

const readOnlyArray: readonly number[] = [5, 87, 54, 468, 465, 4, 46546, 46];

readOnlyArray.push(78);

console.log(readOnlyArray);

// keyof property
