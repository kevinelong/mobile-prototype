const icon = (icon = "menu", iconColor = "") => div("icon-frame", `<img class="icon" src="./images/icons/icon-${icon}${iconColor ? "-" + iconColor : ""}.svg">`);
// const listItem = text => div("nav-list-item", text);
const text = (text) => div("text", text);
const contentPanel = content => content ? div("content-panel", content) : "";

const title = text => div("title", text);
const subtitle = text => div("subtitle", text);
const circle = text => div("circle", text);

const row = (c) => div("row", c);
const col = (c) => div("col", c);
