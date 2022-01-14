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

const PATH_FACES = `${PATH_IMAGES}/faces/`;
const PREFIX_FACES = `${PATH_FACES}/face`;
const SUFFIX_FACES = `.png`;

const BF = 2
const peopleList = [
    {
        id: 1,
        name: "Ruby Red",
    },
    {
        id: 2,
        name: "Joe Shmoe",
    },
    {
        id: 3,
        name: "Betty Ford",
    },
]

function iconPath(name, color = "") {
    return [PREFIX_ICONS, name, color ? "-" + color : "", SUFFIX_ICONS]
        .join("")
        .replace(/([^:]\/)\/+/g, "$1");
}

function facePath(number) {
    return [PREFIX_FACES, number, SUFFIX_FACES]
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
    "settle_split-black": "settle-black",
    "settle_list-black": "settle-black",
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

function personIcon(person) {
    return (
        div(
            "icon-frame",
            `<img class="icon" src="${facePath(person.id)}">`
        ) + text(person.name ? person.name : "")
    );
}

function person(iconName, textName = "") {
    return personItem(
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
