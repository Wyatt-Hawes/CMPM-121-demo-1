import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let elements_to_add: HTMLElement[] = [];
elements_to_add = [];

const gameName = "Wyatt's game";
const buttonName = "🍍";

document.title = gameName;

// Header Element
const header = document.createElement("h1");
header.innerHTML = gameName;
header.style.position = "";
elements_to_add.push(header);

// Counter Element
let counter: number = 0;
const counter_element = document.createElement("div");
counter_element.style.fontSize = "40px";
update_counter(counter_element, counter);
elements_to_add.push(counter_element);

// Button Element
const button = document.createElement("button");
button.textContent = buttonName;
button.style.fontSize = "50px";
elements_to_add.push(button);

// Clicker Element
const num_to_increase: number = 1;
button.addEventListener("click", () => {
  counter = counter + num_to_increase;
  update_counter(counter_element, counter);
});

function update_counter(count_element: HTMLDivElement, counter: number) {
  count_element.innerHTML = counter + " Pineapples Chopped!";
}

elements_to_add.forEach((elem) => {
  app.append(elem);
});
