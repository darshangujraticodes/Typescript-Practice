const studentName: string = "Darshan Gujrati";

const studentRollNo: number = 17;

const isPassHSC: boolean = true;

studentName.toUpperCase();

studentRollNo.toFixed();

let hero: string;

function getFilmHeroName() {
  return "Tony Stark";
}

hero = getFilmHeroName();

// Never used any keyword

// function

let signUp = (
  name: string,
  email: string,
  password: string,
  isPaid: boolean
): string => {
  let result;
  if (name && email && password && isPaid) {
    console.log("Success");
    result = "Success";
  } else {
    console.log("Failed");
    result = "Failed";
  }

  return result;
};

// when the function is created especially to throw error it is been displayed in ( :never ) keyword

console.log(signUp);

//  objects bad behaviour of objects

const createUser = ({
  name,
  email,
  isPaid,
}): { name: string; email: string; isPaid: boolean } => {
  console.log(name, email, isPaid);

  return { name, email, isPaid };
};

createUser({ name: "darsh", email: "dg@gmail.com", isPaid: true });

//  objects bad behaviour of objects

const createUser2 = ({ name, email, isPaid }): {} => {
  console.log(name, email, isPaid);

  return { name, email, isPaid };
};

//  here it is defining empty object not specifying its property and types
// there while calling it has accepted any value

createUser2({ name: 4, email: 5, isPaid: "true" });

// unique alisaases

function userSignUp({}) {}
