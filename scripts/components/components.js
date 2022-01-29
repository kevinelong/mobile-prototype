function text(textValue) {
    textValue = `${textValue}`; //ensure that the parameter is converted to text in case its was something like qty
    const word_count = textValue.split().length;
    return div(`text wc-${word_count}`, textValue);
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

function contentPanel(content, className = "") {
    return content ? div(`content-panel ${className}`, content) : "";
}

function row(content, attrs = "") {
    return div("row", content, attrs);
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

const RUBY = 0;
const JOE = 1;
const BF = 2;

const peopleList = [
    {
        id: 1,
        name: "Ruby Red",
        isCurrentUser: true,
        groups: [],
    },
    {
        id: 2,
        name: "Joe Shmoe",
        isCurrentUser: false,
        groups: [],
    },
    {
        id: 3,
        name: "Betty Ford",
        isCurrentUser: false,
        groups: [],
    },
];
peopleList[BF].groups = [
    {
        people: [peopleList[RUBY]],
        title: "Loved By",
        groupName: "friend",
        subtitle: ""
    },
    {
        people: [peopleList[RUBY]],
        title: "Linked To",
        groupName: "dreamer",
        subtitle: ""
    },
    {
        people: [peopleList[RUBY], peopleList[JOE]],
        title: "Plans With",
        groupName: "Co-Planner",
        subtitle: ""
    },
    {
        people: [peopleList[RUBY], peopleList[JOE]],
        title: "Followed By",
        groupName: "explorer",
        subtitle: ""
    }
];

one_person = peopleList.filter((p, i) => i < 1);
two_people = peopleList.filter((p, i) => i < 2);
three_people = peopleList.filter((p, i) => i < 3);

group_of_one = [{
    people: one_person,
    title: "Recommended By",
    // title: one_person.map(p => p.name).join(", "),
    groupName: "Friend",
    subtitle: ""
}];

group_of_two = [{
    people: two_people,
    title: "Recommended By",
    groupName: "Friend",
    subtitle: ""
}];

group_of_three = [{
    people: three_people,
    title: "Recommended By",
    groupName: "Friend",
    subtitle: ""
}];


dreamers = [{
    people: three_people,
    title: "board linked with",
    groupName: "dreamer",
    subtitle: "sharing a total of 23 cards"
}];

coplanners = [{
    people: three_people,
    title: "planned with",
    groupName: "co-planner",
    subtitle: "plan contains 23 cards"
}];

let messageListExample = [
    {
        text: "Hey girl welcome!",
        person: peopleList[RUBY],
    },
    {
        text: "Hi! Thanks for the invite",
        person: peopleList[BF],
    },
    {
        text: "So... I have a long weekend in 2 weeks. Thinkin' of taking that trip to Santa Barbara I have been telling you about.",
        person: peopleList[RUBY],
    },
    {
        text: "What do you think? Wanna join me?",
        person: peopleList[RUBY],
    },
    {
        text: "I don't have a long weekend :(",
        person: peopleList[BF],
    },
    {
        text: "BUT I can join you on Saturday and Sunday",
        person: peopleList[BF],
    },
    {
        text: "??",
        person: peopleList[BF],
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
    accept: "plan",
};

function iconMap(icon) {
    if (ICON_MAP.hasOwnProperty(icon)) {
        return ICON_MAP[icon];
    }
    return icon;
}

function icon(name = "menu", iconColor = "", textValue = "", hideText = false) {
    return (
        div(
            "icon-frame",
            `<img class="icon" src="${iconPath(iconMap(name), iconColor)}">`
        ) + (textValue && !hideText ? text(textValue) : "")
    );
}

function personIcon(person) {
    return (
        div("icon-frame", `<img class="icon" src="${facePath(person.id)}">`) +
        text(person.name ? person.name : "")
    );
}

function person(person) {

    if (!person) {
        //   console.log("person function requires a person object");
        return "";
    }

    return personItem(
        person.name,
        "connect_person",
        person.id,
        person
    );
}

function inputMessage() {
    return label(
        "input-message",
        input("message-input", "text", `placeholder="Type a message..."`)
    );
}


const activityData = [
    {
        icon: "activities-black",
        name: "Things to Do",
        items: []
    },
    {
        icon: "landscape-black",
        name: "Places to See",
        items: []
    },
    {
        icon: "dining-black",
        name: "Restaurants",
        items: [
            {
                kind: "food",
                title: "Brasil Arts Cafe",
                description:
                    "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations",
                image: "images/photos/brasil_arts_cafe.jpeg",
                people: [{
                    people: [peopleList[RUBY], peopleList[JOE]],
                    title: "Pinned By",
                    groupName: "Dreamer",
                    subtitle: ""
                }],
                tags: ["brazilian", "cafe"],
            },
            {
                kind: "food",
                title: "Yoichi's",
                description:
                    "A prix-fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
                image: "images/photos/yoichis.jpg",
                people: [{
                    people: [peopleList[RUBY], peopleList[JOE]],
                    title: "Pinned By",
                    groupName: "Dreamer",
                    subtitle: ""
                }],
                tags: ["japanese", "sushi", "prix-fixe"]
            }
        ]
    },
    {
        icon: "lodging-black",
        name: "Lodging",
        items: []
    },
    {
        icon: "transportation-black",
        name: "Transportation",
        items: []
    }
];
