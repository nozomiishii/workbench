function autoBindThis(target: object, key: string, desc: PropertyDescriptor) {
  const method = desc.value;
  return (desc.value = {
    get() {
      return method.bind(this);
    },
  });
}

class ProjectInput {
  template: HTMLTemplateElement;
  host: HTMLDivElement;
  element: HTMLFormElement;
  title: HTMLInputElement;
  description: HTMLInputElement;
  people: HTMLInputElement;

  constructor() {
    this.template = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.host = document.getElementById("app") as HTMLDivElement;

    const node = document.importNode(this.template.content, true);
    this.element = node.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.title = this.element.querySelector("#title") as HTMLInputElement;
    this.description = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.people = this.element.querySelector("#people") as HTMLInputElement;
    this.configure();
    this.attach();
  }

  private clearInput() {
    this.title.value = "";
    this.description.value = "";
    this.people.value = "";
  }

  private gatherInput(): [string, string, number] | undefined {
    const enteredTitle = this.title.value;
    const enteredDescription = this.description.value;
    const enteredPeople = this.people.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert("invalid input, please try again");
      return;
    }
    return [enteredTitle, enteredDescription, +enteredPeople];
  }

  @autoBindThis
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.title.value);
    const userInput = this.gatherInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInput();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.host.insertAdjacentElement("afterbegin", this.element);
  }
}

const project = new ProjectInput();
