"use strict";

var fullName = "nozomi ishii";

var getFirstName = function getFirstName(name) {
  return name.split(" ")[0];
};

console.log(getFirstName(fullName));
