import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Wyatt's game";
const buttonName = "🍍";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

const button = document.createElement("button");
button.textContent = buttonName;

app.append(header);
app.append(button);
