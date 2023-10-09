import "./style.css";
import { world_state, upgrade_button, upgrade_data } from "./classes";
("./classes.ts");

//Upgrade Ideas 🥢 📏 🥄 ✂️ 🪒 🔧 🗡️ 🪓 ⛏ 🔪

const available_upgrades: upgrade_data[] = [
  {
    name: "🥢 Chopsticks",
    cost: 10,
    rate: 0.1,
    description: "A less than optimal tool for cutting pineapples.",
  },
  {
    name: "📏 Ruler",
    cost: 100,
    rate: 2,
    description: "You might be able to cut something with the edge.",
  },
  {
    name: "🪓 Axe",
    cost: 1000,
    rate: 50,
    description: "Now you can really cut some fruit.",
  },
  {
    name: "🪒 Switchblade",
    cost: 10000,
    rate: 1000,
    description: "A little bit more control can go a long way.",
  },
  {
    name: "🔪 Professional Knife™",
    cost: 100000,
    rate: 50000,
    description: "Not sure where this came from ",
  },
];

const app: HTMLDivElement = document.querySelector("#app")!;

// Create counter to attach to the world state
const total_pineapple_counter_element = document.createElement("div");
total_pineapple_counter_element.style.fontSize = "40pt";
total_pineapple_counter_element.innerHTML = 0 + " Pineapples Chopped!";

//Initialize world state
const player: world_state = new world_state(total_pineapple_counter_element);
player.elements_to_add.push(total_pineapple_counter_element);

//Title & Header Element
const gameName = "Wyatt's game";
document.title = gameName;
create_new_element("h1", "", gameName, true);

// Main Button Element
const buttonName = "🍍";
const button = create_new_element("button", "70px", buttonName);

// Add clicking ability
button.addEventListener("click", () => {
  player.update_counter(player.per_click_increase);
});

//Auto Click Element
const autoclick_element = create_new_element(
  "div",
  "30px",
  player.pineapples_per_second.toFixed(1) + " / pps",
);
player.pineapple_per_second_count_element = autoclick_element as HTMLDivElement;
start_auto_counter(player);

//Create Upgrade buttons
available_upgrades.forEach((data) => {
  new upgrade_button(
    data.name,
    data.cost,
    data.rate,
    1.15,
    player,
    data.description,
  );
});

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
