class Project {}
/////////////////////////////////////////////////////////////////
class ProjectState {
  private listeners: any[] = [];
  private projects: any[] = [];
  private static instance: ProjectState;

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addLinstener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, people: number) {
    const project = {
      id: Math.random.toString(),
      title,
      description,
      people,
    };
    this.projects.push(project);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

//////////////////////////////////////////////////////
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(input: Validatable) {
  let isValid = true;
  if (input.required) {
    isValid = isValid && input.value.toString().trim().length !== 0;
  }
  if (input.minLength != null && typeof input.value === "string") {
    isValid = isValid && input.value.length >= input.minLength;
  }
  if (input.maxLength != null && typeof input.value === "string") {
    isValid = isValid && input.value.length <= input.maxLength;
  }
  if (input.min != null && typeof input.value === "string") {
    isValid = isValid && input.value.length >= input.min;
  }
  if (input.max != null && typeof input.value === "string") {
    isValid = isValid && input.value.length <= input.max;
  }
  return isValid;
}

function autoBindThis(target: object, key: string, desc: PropertyDescriptor) {
  const method = desc.value;
  return (desc.value = {
    get() {
      return method.bind(this);
    },
  });
}
//////////////////////////////////////////////////////////////////////////////////

class ProjectList {
  template: HTMLTemplateElement;
  host: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: any[];
  constructor(private type: "active" | "finished") {
    this.template = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.host = document.getElementById("app") as HTMLDivElement;
    this.assignedProjects = [];

    const node = document.importNode(this.template.content, true);
    this.element = node.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addLinstener((projects: any[]) => {
      this.assignedProjects = projects;
      this.renderProject();
    });
    this.attach();
    this.renderContent();
  }
  private renderProject() {
    const list = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    for (const item of this.assignedProjects) {
      const li = document.createElement("li");
      li.textContent = item.title;
      list.appendChild(li);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private attach() {
    this.host.insertAdjacentElement("beforeend", this.element);
  }
}

//////////////////////////////////////////////////////////////////////////////////
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

    const validTitle: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const validDescription: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const validPeople: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(validTitle) ||
      !validate(validDescription) ||
      !validate(validPeople)
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
      projectState.addProject(title, desc, people);
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
const activeList = new ProjectList("active");
const finishedList = new ProjectList("finished");
