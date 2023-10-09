import "./style.css";
import { world_state, upgrade_button } from "./classes";
("./classes.ts");

//Upgrade Ideas 🥢 📏 🥄 ✂️ 🪒 🔧 🗡️ 🪓 ⛏ 🔪

const app: HTMLDivElement = document.querySelector("#app")!;

// Create counter to attach to the world state
const total_pineapple_counter_element = document.createElement("div");
total_pineapple_counter_element.style.fontSize = "40pt";
total_pineapple_counter_element.innerHTML = 0 + " Pineapples Chopped!";

const player: world_state = new world_state(total_pineapple_counter_element);
player.elements_to_add.push(total_pineapple_counter_element);

//Title & Header Element
const gameName = "Wyatt's game";
const buttonName = "🍍";
document.title = gameName;
create_new_element("h1", "", gameName, true);

// Button Element
const button = create_new_element("button", "50px", buttonName);

// Clicker Element
button.addEventListener("click", () => {
  player.update_counter(player.per_click_increase);
});

//Auto Click Element
const autoclick_element = create_new_element(
  "div",
  "30px",
  player.pineapples_per_second + " / pps",
);
player.pineapple_per_second_count_element = autoclick_element as HTMLDivElement;
start_auto_counter(player);

//First upgrade button
new upgrade_button("🥢", 10, 1, 1, player);

//-----------------
//----Functions----
//-----------------
//Add all elements in order
player.elements_to_add.forEach((elem) => {
  app.append(elem);
});

// Create a new HTML element function
function create_new_element(
  type: string,
  font_size: string,
  text: string,
  unshift: boolean = false,
): HTMLElement | HTMLButtonElement | HTMLDivElement {
  const new_element = document.createElement(type);
  new_element.style.fontSize = font_size;
  new_element.innerHTML = text;

  if (unshift) {
    player.elements_to_add.unshift(new_element);
  } else {
    player.elements_to_add.push(new_element);
  }

  return new_element;
}

//Update counter function

//Automatically update counter based on pineapples_per_second
function start_auto_counter(player_world_state: world_state) {
  let past_date = performance.now();
  window.requestAnimationFrame(check_for_counter_update);

  function check_for_counter_update() {
    const milliseconds_per_update =
      1000 / player_world_state.pineapples_per_second;

    if (performance.now() - past_date > milliseconds_per_update) {
      player.update_counter(1);
      past_date = performance.now();
    }
    window.requestAnimationFrame(check_for_counter_update);
  }
}
