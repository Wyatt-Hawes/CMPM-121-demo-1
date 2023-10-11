# Exercise: Incremental Game Development

---

## Step Overview (Check commit history)

---

1. A button you can click
2. Clicking increases a counter
3. Automatic clicking
4. Continuous growth
5. Purchasing an upgrade
6. Multiple upgrades and status
7. Price Increases
8. Consistent Narrative
9. Data-driven design
10. Content expansion

## Steps more in-depth (Provided by Prof. Adam Smith)

---

## 1) A button you can click

- Add a `<button>` to the webpage Select a fun emoji to display inside of the button.
- Commit with message "Step 1 Complete"

## 2) Clicking increases a counter

- Clicking increases a counter. Add a `<div>` element to the page that will report on the value of a counter with a message.
- Give your counter a fun unit label that is relevant to the emoji you chose in Step 1.
- Make it so clicking the button increases the counter by 1 unit each time.
- Commit with message "Step 2 Complete"

## 3) Automatic clicking

- Make it so that the counter increments by 1 unit each second in addition to the increments coming from player clicks.
- Implement this using the `setInterval` global function.
- Commit with message "Step 3 Complete"

## 4) Continuous growth

- Make it so that the counter grows by a fractional amount per animation frame with a cumulative increase of 1 unit per second. (If we were animating about 60 frames per second, the counter should go up by 1/60 units per frame.)
- Implement this using `requestAnimationFrame` and remove your `setTimeout` implementation.
- Your code should not assume a 60fps animation rate (some of your classmates have fancy 240fps gaming displays). Instead, your code should calculate the amount to increase the counter based on how much time has passed.
- Commit with message "Step 4 Complete"

## 5) Purchasing an upgrade

- Initialize the default counter growth rate to zero (no automatic increase at the start of play).
- Add a new button to represent a purchasable upgrade item.
- Make it so the button is `disabled` until the player has at least 10 units in their counter.
- When they click the purchase button, it deducts 10 units from their counter and increments the growth rate by 1 (to a rate matching the previous step)
- Allow the player to purchase the item multiple items, but only when they can afford it.
- Commit with message "Step 5 Complete"

## 6) Multiple upgrades and status

- Generalize your upgrade purchasing system to have three items available:
  - A costs 10 units and provides 0.1 units/sec
  - B costs 100 units and provides 2.0 units/sec
  - C costs 1000 units and provides 50 units/sec
- Add status displays:
  - The current growth rate (e.g. “1.2 cookies/sec”)
  - The count of how many items of each type the player has purchased
  - Commit with message "Step 6 Complete"

## 7) Price Increases

- Implement an automatic price increase system so that it becomes more expensive to purchase more of each item. The price for an item should increase by a factor of `1.15` after each purchase.
- For example, if an item initially costs `10` units, it will cost `11.5` units for a second one, `13.22` for the third one, and about `35` for the 10th one.
- Commit with message "Step 7 Complete"

## 8) Consistent Narrative

- Redesign your main button, the label for the counter units, and the names of the A/B/C buttons to have some consistent theme.
- In cookie clicker, the main button is a giant cookie that can be clicked to increment a "cookie" counter and the automatic cookie production rate can be increased by purchasing cursors, grandmas, and farms.
- Commit with message "Step 8 Complete"

## 9) Data-driven design

- Add the code shown to your project.
- `interface Item {`

  `name: string,`

  `cost: number,`

  `rate: number`

  `};`

- `const availableItems : Item[] = [`

  `{name: "A", cost: 10, rate: 0.1},`

  `{name: "B", cost: 100, rate: 2},`

  `{name: "C", cost: 1000, rate: 50},`

  `];`

- Optionally, replace the terms “cost” and “rate” with alternative terms that make more sense to you.
- Replace the generic A/B/C names with those that you chose in Step 8.
  Then, refactor the remainder of your code so that it `no longer has any hard-coded references` to the original items. Instead, implement all of your item logic by processing the data in the new availableItems array.
- Commit with message "Step 9 Complete"

## 10) Content expansion

- Add two more items you your collection of available items, giving them names, costs, and production rates appropriate to your game's theme and imagined player progression.
- Add a `"description"` field to the Item interface, then give each of your items a fun description.
- Commit with message "Step 10 Complete"
