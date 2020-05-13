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
var User = /** @class */ (function () {
    function User(username, email) {
        this.username = username;
        this.email = email;
    }
    User.prototype.login = function () {
        console.log(this.username + " just logged in");
    };
    return User;
}());
var userOne = new User("mario", "mario@gmail");
var userTwo = new User("chun-li", "chun-li@gmail");
console.log(userOne, userTwo);
