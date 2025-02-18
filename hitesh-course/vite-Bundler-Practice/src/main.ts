/*

Types 

number, string, Boolean 
Null, undefined, void
Object, Array, Tuples
Any, Never, Unknown

*/

// variable | in this while declaring variablle we do not explicitly mention the types but requireed while declareing Array

const userId = 5;
const userName = "Harry Potter";

// number[] -> define only number values is allowed inside array
const sudentMarks: number[] = [4, 54, 54, 46, 4641, 55];

console.log(userId, userName, sudentMarks);

// function type 1

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

console.log("sum = ", sum(454, 565));

// function type 2 | more than 2 types value can be fetched

function getValue(myVal: number): Boolean | string {
  if (myVal > 5) return true;

  return "200 OK";
}

const val = getValue(2);

console.log("Get value = ", val);

// function type 3 | Arrow function

const arrayValue = ["thor", "hulk", "loki", "Dr. Strange"];
// const arrayValue = [2, 4, 6, 8, 10];

const newArrayValue = arrayValue?.map((item, index): string => {
  return `Array Fetch Value at ${index} = ${item}`;
});

console.log(newArrayValue);

// function type 4 | never
// it is use espeically to when we want to handle Error of exceptrion or operation

function handleError(errorMssg: string): never {
  throw new Error(errorMssg);
}

// function type 5 | interface

// industry recommended format is to use interface

interface Student {
  readonly userId: number;
  name: string;
  course: string;
  price: number;
  isPaid: boolean;
  courseWishlist?: string[];
}

const studentInfo = {
  userId: 1,
  name: "Darshan",
  course: "Full Stack Developer",
  price: 499,
  isPaid: true,
  courseWishlist: ["nodejs", "nextjs", "typescript"],
};

function courseAdmission(studentData: Student): Student {
  console.log("object return  function ", studentData);

  return studentInfo;
}

courseAdmission(studentInfo);

// object types it is handled using 2 format : a] types b] interface

// type aliases

type studentObjectTypes = {
  name: string;
  readonly roll_no: number;
  // union operator |( pipe symbole | or operator) define it can allow number or string input value
  std: number | string;

  // union operator with defined values only
  stream: "Science" | "Commerce" | "Arts";
  college: string;
  //  ?(question mark) define optional parameter in object
  hobby?: string[];
  isSportman?: boolean;
};

const student1: studentObjectTypes = {
  name: "Harry Potter",
  roll_no: 10,
  std: 8,
  stream: "Science",
  college: "Hogwarts School of Witchcraft and Wizardry",
  isSportman: true,
};

const student2: studentObjectTypes = {
  name: "Ron Weasly",
  roll_no: 15,
  std: 8,
  stream: "Science",
  college: "Hogwarts School of Witchcraft and Wizardry",
  isSportman: false,
  hobby: ["Playing Chess", "Driving Car"],
};

console.log(student1, student2);
