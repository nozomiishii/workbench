interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T) {
  let descriptionText = "got no value";
  if (element.length === 1) {
    descriptionText = "got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "got " + element.length + " elements";
  }
  return [element, descriptionText];
}

function extractAncConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAncConvert({ name: "nozomi" }, "name");
