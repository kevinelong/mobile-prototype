const choice = (text, selected = false, badgeText = "") => div(
    `choice ${selected ? 'selected' : ''}`,
    text + badgeText,
    `onclick='select(this)'`
);

const choiceSet = (id, choiceList = [], selectedItem = "") => div("choice-set",
    [...choiceList].map(c => choice(c, c == selectedItem)).join("")
    , `id="${id}" class='secondary-nav'`
);