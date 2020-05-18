class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError("oops boot was sunk")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.error(errorMessage);
      }
    };
    // console.log("target ", target);
    // console.log("key: ", key);
  };
}

// testDecorator(Bo at.prototype, "pilot");

// new Boat().pilot();
