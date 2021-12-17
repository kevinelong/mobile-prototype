const div = (className, content, attrs) => `<div class="${className}" ${attrs}>${content}</div>`;

const title = text => div("title", text);
const subtitle = text => div("subtitle", text);
const circle = text => div("circle", text);

const cardList = content => div("card-list", content);

const card = (title, subtitle = "", body = "", people = "", actions = "") => div("card",
    cardTitle(title) + cardSubtitle(subtitle) + cardText(body) + cardPeople(people) + cardActions(actions))

// cardPhoto(`<img id="background-img" class="bgi" src="https://farm3.static.flickr.com/2098/2260149771_00cb406fd6_o.jpg" alt="">`) +

const icon = (icon = "menu") => `<img class="icon" src="./images/icons/icon-${icon}.svg">`;
const listItem = text => div("nav-list-item", text)

const choice = (text, selected = false, badgeText = "") => div(
    `choice ${selected ? 'selected' : ''}`,
    text + badgeText,
    `onclick='select(this)'`)

const choiceSet = (id, choiceList, selectedItem) => div("choice-set",
    [...choiceList].map(c => choice(c, c == selectedItem)).join("")
    , `id="${id}" class='secondary-nav'`)


const hashTag = (c) => div("hash-tag", c);

const cardTitle = (c) => div("card-title", c);
const cardTitleText = (c) => div("card-title-text", c);
const cardSubtitle = (c) => div("card-subtitle", c);
const cardPhoto = (c) => div("card-photo", c);
const cardPeople = (c) => div("card-people", c);
const cardActions = (c) => div("card-actions", c);
const cardText = (c) => div("card-text", c);

const mainNavTab = (text = "", selected = false, icon = "compass") =>
    `<div id="main-nav-tab-${toName(text)}" class="main-nav-tab ${selected ? ' selected' : ''}" onclick="selectPage(this)">
<div class="main-nav-tab-background" id="${toName(text)}">
    <div class="icon-frame">
        <img class="icon" src="./images/nav/icon-nav-${icon}-white.svg">
    </div>
    <div class="label">${text}</div>
</div>
</div>`

const mainNav = (tabNames, selectedItem = "") => [...tabNames].map(
    t => mainNavTab(t.toUpperCase(), t == selectedItem, t)
).join("");

const page = (name, caption = "", choiceList = [], selectedChoice = "", content = "", selectedCard = "") =>
    div(`${name} page`, title(
            icon("menu") +
            div("title-middle",
                div("title-text", caption) +
                circle(icon("search"))
            ) + icon("account-circle")) +
        choiceSet("${name}-filters", choiceList, selectedChoice) +
        content, `id='page-${name}'`);
