function text(textValue) {
    return div("text", textValue);
}

function title(textValue) {
    return div("title", textValue);
}

function subtitle(textValue) {
    return div("subtitle", textValue);
}

function circle(textValue) {
    return div("circle", textValue);
}

function contentPanel(content) {
    return content ? div("content-panel", content) : "";
}

function row(content) {
    return div("row", content);
}

function col(content) {
    return div("col", content);
}

const PATH_STATIC = "";
const PATH_IMAGES = `${PATH_STATIC}images/`;
const PATH_ICONS = `${PATH_IMAGES}/icons/`;
const PREFIX_ICONS = `${PATH_ICONS}/icon-`;
const SUFFIX_ICONS = `.svg`;

function iconPath(name, color = "") {
    return [PREFIX_ICONS, name, color ? "-" + color : "", SUFFIX_ICONS]
        .join("")
        .replace(/([^:]\/)\/+/g, "$1");
}

// const iconPath = (name, color = "") => [
//     PREFIX_ICONS,
//     name,
//     color ? "-" + color : "",
//     SUFFIX_ICONS
// ].join('').replace(/([^:]\/)\/+/g, "$1");

const ICON_MAP = {
    "explore_detail-black": "explore-black",
    "connect_chat-black": "connect-black",
    "plan_detail-black": "plan-black",
    decline: "plan",
    accept: "plan",
};

function iconMap(icon) {
    if (ICON_MAP.hasOwnProperty(icon)) {
        return ICON_MAP[icon];
    }
    return icon;
}

function icon(name = "menu", iconColor = "", textValue = "") {
    return (
        div(
            "icon-frame",
            `<img class="icon" src="${iconPath(iconMap(name), iconColor)}">`
        ) + text(textValue ? textValue : "")
    );
}

function person(iconName, textName = "") {
    return actionItem(
        "person",
        "connect_person",
        "",
        textName ? textName : iconName
    );
}

function inputMessage() {
    return label(
        "input-message",
        input("message-input", "text", `placeholder="Type a message..."`)
    );
}
