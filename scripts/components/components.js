const div = (className, content, attrs) => `<div class="${className}" ${attrs}>${content}</div>`;

const title = text => div("title", text);
const subtitle = text => div("subtitle", text);
const circle = text => div("circle", text);

const cardList = content => div("card-list", content);

const card = (title, body = "", people = "", actions = "", image="") => div(
    "card",
    cardSection(
        cardTitle(title)
    ) + body +
    cardSection(
        cardQuadrant(
            cardPeople(people) +
            cardActions(`card-actions`, actions)
        )
    ),
    image ? `style="background-image: url('${image}');"` : ""
);

const tag = (name, className, attrs) => `<${name} class="${className}" ${attrs}>`;
const closedTag = (name, content, className, attrs) => `<${name} class="${className}" ${attrs}>${content}</${name}>`;

const img = (className, src = "") => tag("img", "image", `src="${src}`);
const icon = (icon = "menu") => div("icon-frame", `<img class="icon" src="./images/icons/icon-${icon}.svg">`);
const listItem = text => div("nav-list-item", text);

const choice = (text, selected = false, badgeText = "") => div(
    `choice ${selected ? 'selected' : ''}`,
    text + badgeText,
    `onclick='select(this)'`
);

const choiceSet = (id, choiceList, selectedItem) => div("choice-set",
    [...choiceList].map(c => choice(c, c == selectedItem)).join("")
    , `id="${id}" class='secondary-nav'`
);

const actionItem = (text, badgeText = "") => div(
    `action-item`,
    icon(text) + badgeText,
    `onclick='actionClick(this)'`
);

const hashTag = (c,color="none") => div(`hash-tag ${color}`, c);
const hashTagRed = (c) => div("hash-tag red", c);
const hashTagGreen = (c) => div("hash-tag green", c);
const hashTagBlue = (c) => div("hash-tag blue", c);
const hashTagGold = (c) => div("hash-tag gold", c);
const hashTagSilver = (c) => div("hash-tag silver", c);
const hashTagBlack = (c) => div("hash-tag black", c);
const hashTagWhite = (c) => div("hash-tag white", c);

const cardText = (c) => div("card-text", c);
const cardSection = (c) => div("card-section", c);
const cardQuadrant = (c) => div("card-quadrant", c);
const cardTitle = (c) => div("card-title", c);
const cardTitleText = (c) => div("card-title-text", c);
const cardSubtitle = (c) => div("card-subtitle", c);
const cardPhoto = (c) => div("card-photo", c);

const messageText = (c) => div("message-text", c);

const messageItem = (mi) => div("message-item",
    circle(icon("account-circle") + mi[1]) +
    messageText(mi[0])
);

const messagePanel = (messageList=[["",""]]) => {
    return div("message-panel",
        [...messageList].map(mi=>messageItem(mi)).join("")
    )
}
const moneyText = (c) => div("money-text", c);

const moneyItem = (mi) => div("money-item",
    circle(icon("account-circle") + mi[1]) +
    moneyText(mi[2]) +
    moneyText(mi[3]) +
    moneyText(mi[0])
);

const moneyPanel = (messageList=[["",""]]) => {
    return div("money-panel",
        [...messageList].map(mi=>moneyItem(mi)).join("")
    )
}

const personIcon = (p) => div("person-icon",
    circle(icon("account-circle") + p)
);

const cardPeople = (peopleList) => div("card-people",
    [...peopleList].map(p=>personIcon(p)).join("")
);


const cardActions = (id, actionList = []) => div("action-list",
    [...actionList].map(c => actionItem(c)).join("")
    , `id="${id}" class='action-list'`
);


// cardPhoto(`<img id="background-img" class="bgi" src="https://farm3.static.flickr.com/2098/2260149771_00cb406fd6_o.jpg" alt="">`) +
