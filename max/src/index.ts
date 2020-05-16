const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "nozomi",
  age: 29,
  hobbies: ["dance", "code"],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}
