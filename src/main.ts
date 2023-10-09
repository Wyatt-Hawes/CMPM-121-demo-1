import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let elements_to_add: HTMLElement[] = [];
elements_to_add = [];

const gameName = "Wyatt's game";
const buttonName = "🍍";

document.title = gameName;

// Header Element
create_new_element("h1", "", gameName);

// Counter Element
let total_pineapples: number = 0;
const counter_element = create_new_element(
  "div",
  "40px",
  total_pineapples + " Pineapples Chopped!",
);

// Button Element
const button = create_new_element("button", "50px", buttonName);

// Clicker Element
const num_to_increase: number = 1;
button.addEventListener("click", () => {
  update_counter(
    counter_element,
    total_pineapples,
    num_to_increase,
    " Pineapples Chopped!",
  );
});

//Auto Click Element
const per_second_counter: number = 1;
const updates_per_second: number = 1;

create_new_element("div", "30px", per_second_counter + " / pps");

//Interval
setInterval(() => {
  update_counter(
    counter_element,
    total_pineapples,
    per_second_counter / updates_per_second,
  );
}, updates_per_second * 1000);

//Add all elements in order
elements_to_add.forEach((elem) => {
  app.append(elem);
});

//Update counter function
function update_counter(
  count_element: HTMLDivElement | HTMLElement,
  counter: number,
  count: number,
  text: string = " Pineapples Chopped!",
) {
  total_pineapples = counter + count;
  count_element.innerHTML = total_pineapples + text;
}

// Create a new HTML element function
function create_new_element(type: string, font_size: string, text: string) {
  const new_element = document.createElement(type);
  new_element.style.fontSize = font_size;
  new_element.innerHTML = text;
  elements_to_add.push(new_element);

  return new_element;
}
