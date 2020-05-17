class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const nozomi = new Department("nozomi");

console.log(nozomi.describe());
