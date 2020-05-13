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
  score: number;
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  deleteUser(user: any) {
    users = users.filter((u) => {
      // console.log("u.username", u.username);
      // console.log("user.username", user.username);
      return u.username !== user.username;
    });
  }
}

const userOne = new User("mario", "mario@gmail");
const userTwo = new User("chun-li", "chun-li@gmail");

const userThree = new Admin("shaun", "shuan@netninja.com");

// userOne.login().logout().incScore().incScore();

// console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);

console.log(users);
