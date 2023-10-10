// World State Class
export class WorldState {
  per_click_increase: number;
  pineapples_per_second: number;
  total_pineapples: number;
  elements_to_add: HTMLElement[] = [];
  total_pineapple_count_element: HTMLDivElement;
  upgrade_buttons: UpgradeButton[] = [];
  pineapple_per_second_count_element: HTMLDivElement | null = null;

  constructor(total_pineapple_counter_element: HTMLDivElement) {
    this.elements_to_add = [];
    this.upgrade_buttons = [];

    this.per_click_increase = 1;
    this.pineapples_per_second = 0;
    this.total_pineapples = 0;
    this.total_pineapple_count_element = total_pineapple_counter_element;
  }

  update_counter(count: number, text: string = " Pineapples Chopped!") {
    this.total_pineapples = this.total_pineapples + count;
    this.total_pineapple_count_element.innerHTML =
      this.total_pineapples.toFixed(0) + text;
    this.check_buttons();
  }

  check_buttons() {
    this.upgrade_buttons.forEach((btn) => {
      if (this.total_pineapples >= btn.cost) {
        btn.button_element.disabled = false;
      } else {
        btn.button_element.disabled = true;
      }
    });
  }
}

//Upgrade button class
export class UpgradeButton {
  button_element: HTMLButtonElement;
  cost: number;
  per_second_increase: number;
  price_scaling: number;
  emoji_name: string;
  world_state: WorldState;
  description: string;

  constructor(
    emoji: string,
    cost: number,
    psi: number,
    p_scaling: number,
    world: WorldState,
    description: string,
  ) {
    this.emoji_name = emoji;
    this.button_element = document.createElement("button");
    this.button_element.style.fontSize = "20pt";
    this.cost = cost;
    this.per_second_increase = psi;
    this.price_scaling = p_scaling;
    this.world_state = world;
    this.description = description;

    this.set_text();
    this.button_element.disabled = true;
    world.elements_to_add.push(this.button_element);

    this.button_element.addEventListener("click", () => {
      world.update_counter(this.cost * -1, undefined);
      this.update_cost();
      this.update_pineapple_per_second();
    });
    this.world_state.upgrade_buttons.push(this);
  }

  update_pineapple_per_second() {
    this.world_state.pineapples_per_second =
      this.world_state.pineapples_per_second + this.per_second_increase;

    if (this.world_state.pineapple_per_second_count_element != null) {
      this.world_state.pineapple_per_second_count_element.innerHTML =
        this.world_state.pineapples_per_second.toFixed(1) + " / pps";
    }
  }

  update_cost() {
    this.cost = this.cost * this.price_scaling;
    this.set_text();
  }

  set_text() {
    this.button_element.innerHTML =
      "<font size=+3>" +
      this.emoji_name +
      "</font><br> Cost: " +
      this.cost.toFixed(1) +
      " | " +
      this.per_second_increase.toFixed(1) +
      " pps" +
      "<br>" +
      "<font size=-1>" +
      this.description +
      "</font>";
  }
}

//Upgrade button data interface
export interface UpgradeData {
  name: string;
  cost: number;
  rate: number;
  description: string;
}
