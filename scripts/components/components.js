const text = textValue => div("text", textValue);
const title = textValue => div("title", textValue);
const subtitle = textValue => div("subtitle", textValue);
const circle = textValue => div("circle", textValue);

const contentPanel = content => content ? div("content-panel", content) : "";

const row = content => div("row", content);
const col = content => div("col", content);
// debugger;
const PATH_STATIC = "";
const PATH_IMAGES = `${PATH_STATIC}/images/`;
const PATH_ICONS = `${PATH_IMAGES}/icons/`;
const PREFIX_ICONS = `${PATH_ICONS}/icon-`;
const SUFFIX_ICONS = `.svg`;

const iconPath = (name, color = "") => [
    PREFIX_ICONS,
    name,
    color ? "-" + color : "",
    SUFFIX_ICONS
].join('').replace(/([^:]\/)\/+/g, "$1");

const icon = (icon = "menu", iconColor = "") => div("icon-frame",
    `<img class="icon" src="${iconPath(icon, iconColor)}">`);

const person = (iconName, textName = "") => actionItem("person", "", "",
    textName ? textName : iconName);