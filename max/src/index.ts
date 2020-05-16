enum Role {
  ADMIN,
  READ_ONLY,
  AUTHER,
}

const person = {
  name: "nozomi",
  age: 29,
  hobbies: ["dance", "code"],
  role: Role.ADMIN,
};

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLowerCase());
// }

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
