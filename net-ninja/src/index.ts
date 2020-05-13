// const userOne = {
//   username: "ryu",
//   email: "ryu@ninga.uk",
//   login(): void {
//     console.log("the user logged in");
//   },
//   logout(): void {
//     console.log("the user logged out");
//   },
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

class User {
  username: string;
  email: string;
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} just logged in`);
  }
}

const userOne = new User("mario", "mario@gmail");
const userTwo = new User("chun-li", "chun-li@gmail");

console.log(userOne, userTwo);
