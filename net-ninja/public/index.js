"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(userOne.email, userOne.username);
// userOne.login();
var User = /** @class */ (function () {
    function User(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    User.prototype.login = function () {
        console.log(this.username + " just logged in");
        return this;
    };
    User.prototype.logout = function () {
        console.log(this.username + " just logged out");
        return this;
    };
    User.prototype.incScore = function () {
        this.score += 1;
        console.log(this.username + " has a score of " + this.score);
        return this;
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(User));
var userOne = new User("mario", "mario@gmail");
var userTwo = new User("chun-li", "chun-li@gmail");
var userThree = new Admin("shaun", "shuan@netninja.com");
userOne.login().logout().incScore().incScore();
console.log(userOne, userTwo, userThree);
