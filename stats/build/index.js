"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matchs = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
console.log(matchs);
var manUnitedWins = 0;
for (var _i = 0, matchs_1 = matchs; _i < matchs_1.length; _i++) {
    var match = matchs_1[_i];
}
