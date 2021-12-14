const div = (className, content, attrs) => `<div class="${className}" ${attrs}>${content}</div>`

const title = text => div("title", text)
const circle = text => div("circle", text)

const cardList = content => div("card-list", content)

const card = text => div("card", text)

const icon = (icon = "menu") => `<img class="icon" src="./images/icons/icon-${icon}.svg">`;
const listItem = text => div("nav-list-item", text)
const choiceSet = content => div("choice-set", content, "id='secondary-nav'")

const choice = (text, selected = false) => div(
    `choice choice-${toName(text)} ${selected ? 'selected' : ''}`, text, `id='${toName(text)}' onclick='select(this)'`
)

const mainNavTab = (text = "", selected = false, icon = "compass") => `<div id="main-nav-tab-${toName(text)}" class="main-nav-tab ${selected ? ' selected' : ''}" onclick="select(this)">
<div class="main-nav-tab-background">
    <div class="icon-frame">
        <img class="icon" src="./images/nav/icon-nav-${icon}-white.svg">
    </div>
    <div class="label">${text}</div>
</div>
</div>`
