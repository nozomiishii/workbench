interface GreetingOptions {
  log?: boolean;
  name: string;
  parting?: boolean;
}

class Greeter {
  log?: boolean;
  constructor(log: boolean) {
    this.log = log;
  }

  greeting(options: GreetingOptions): string {
    if (options.log) {
      console.log(name);
    }
    return `Hello to ${name}`;
  }
}

function greeting(options: GreetingOptions): string {
  if (options.log) {
    console.log(name);
  }
  return `Hello to ${name}`;
}

let opts = { name: "nozomi", log: true };

greeting(opts);
