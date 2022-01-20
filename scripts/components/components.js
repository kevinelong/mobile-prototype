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

const RUBY = 0
const JOE = 1
const BF = 2

const peopleList = [
    {
        id: 1,
        name: "Ruby Red",
        isCurrentUser: true,
    },
    {
        id: 2,
        name: "Joe Shmoe",
        isCurrentUser: false,
    },
    {
        id: 3,
        name: "Betty Ford",
        isCurrentUser: false,
    },
];

let messageListExample = [
    {
        text: "Are you ready for mimosas?",
        person: peopleList[JOE],
    },
    {
        text: "Oh, so ready...",
        person: peopleList[RUBY],
    },
    {
        text: "Waffle bar is where I'm at!",
        person: peopleList[BF],
    },
    {
        text: "Where is the waffle bar again?",
        person: peopleList[RUBY],
    },
    {
        text: "Don't worry about it, I'm driving this time",
        person: peopleList[RUBY],
    },
    {
        text: "Now is the time for all good people to come to the aid of their planet",
        person: peopleList[BF],
    },
    {
        text: "I started without you",
        person: peopleList[BF],
    },
    {
        text: "I was gonna say...",
        person: peopleList[RUBY],
    },
];

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
    "dream_board-black": "dream-black",
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

function icon(name = "menu", iconColor = "", textValue = "", hideText=false) {
    return (
        div(
            "icon-frame",
            `<img class="icon" src="${iconPath(iconMap(name), iconColor)}">`
        ) + ((textValue && !hideText) ? text(textValue) : "")
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
