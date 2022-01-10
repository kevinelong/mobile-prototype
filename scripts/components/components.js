const text = textValue => div("text", textValue);
const title = textValue => div("title", textValue);
const subtitle = textValue => div("subtitle", textValue);
const circle = textValue => div("circle", textValue);

const contentPanel = content => content ? div("content-panel", content) : "";

const row = content => div("row", content);
const col = content => div("col", content);

const PATH_STATIC = "";
const PATH_IMAGES = `${PATH_STATIC}images/`;
const PATH_ICONS = `${PATH_IMAGES}/icons/`;
const PREFIX_ICONS = `${PATH_ICONS}/icon-`;
const SUFFIX_ICONS = `.svg`;

function iconPath (name, color = "") {
    return [
        PREFIX_ICONS,
        name,
        color ? "-" + color : "",
        SUFFIX_ICONS
    ].join('').replace(/([^:]\/)\/+/g, "$1");
}

// const iconPath = (name, color = "") => [
//     PREFIX_ICONS,
//     name,
//     color ? "-" + color : "",
//     SUFFIX_ICONS
// ].join('').replace(/([^:]\/)\/+/g, "$1");

const ICON_MAP = {
    "connect_chat-black" : "connect-black",
    "plan_detail-black" : "plan-black",
    "decline" : "plan",
    "accept" : "plan",
}

const iconMap = icon => {
    if (ICON_MAP.hasOwnProperty(icon)) {
        return ICON_MAP[icon];
    }
    return icon;
}

function icon (name = "menu", iconColor = "", textValue="") { 
    return div("icon-frame",
    `<img class="icon" src="${iconPath(iconMap(name), iconColor)}">`) + text(textValue ? textValue : "");
}

const person = (iconName, textName = "") => actionItem("person", "connect_person", "",
    textName ? textName : iconName);

const inputMessage = () => label("input-message",
    input("message-input", "text", `placeholder="Type a message..."`)
);

