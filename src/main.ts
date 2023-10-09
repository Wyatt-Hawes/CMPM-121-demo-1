import "./style.css";

const per_click_increase: number = 1;
const pineapples_per_second: number = 2;
let total_pineapples: number = 0;

const app: HTMLDivElement = document.querySelector("#app")!;

//Added elements array
let elements_to_add: HTMLElement[] = [];
elements_to_add = [];

//Title & Header Element
const gameName = "Wyatt's game";
const buttonName = "🍍";
document.title = gameName;
create_new_element("h1", "", gameName);

// Counter Element
const total_pineapple_counter_element = create_new_element(
  "div",
  "40px",
  total_pineapples + " Pineapples Chopped!",
);

// Button Element
const button = create_new_element("button", "50px", buttonName);

// Clicker Element
button.addEventListener("click", () => {
  update_counter(
    total_pineapple_counter_element,
    per_click_increase,
    " Pineapples Chopped!",
  );
});

//Auto Click Element
create_new_element("div", "30px", pineapples_per_second + " / pps");
start_auto_counter(total_pineapple_counter_element, pineapples_per_second);

//Add all elements in order
elements_to_add.forEach((elem) => {
  app.append(elem);
});

// Create a new HTML element function
function create_new_element(type: string, font_size: string, text: string) {
  const new_element = document.createElement(type);
  new_element.style.fontSize = font_size;
  new_element.innerHTML = text;
  elements_to_add.push(new_element);

  return new_element;
}

//Update counter function
function update_counter(
  count_element: HTMLDivElement | HTMLElement,
  count: number,
  text: string = " Pineapples Chopped!",
) {
  total_pineapples = total_pineapples + count;
  count_element.innerHTML = total_pineapples + text;
}

//Automatically update counter based on pineapples_per_second
function start_auto_counter(elem: HTMLElement, pps: number) {
  let past_date = performance.now();
  window.requestAnimationFrame(check_for_counter_update);

  function check_for_counter_update() {
    const milliseconds_per_update = 1000 / pps;

    if (performance.now() - past_date > milliseconds_per_update) {
      update_counter(elem, 1);
      past_date = performance.now();
    }
    window.requestAnimationFrame(check_for_counter_update);
  }
}
