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

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.title.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.host.insertAdjacentElement("afterbegin", this.element);
  }
}

const project = new ProjectInput();
