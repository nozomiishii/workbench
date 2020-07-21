interface RactangleOptions {
  width: number;
  length: number;
}

const drawRactangle = (options: RactangleOptions) => {
  let width = options.width;
  let length = options.length;
};

drawRactangle({
  width: 100,
  length: 50,
});

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  walk(distance: number) {}
}
