function choice(id, text, selected = false, badgeText = "") {
    return div(
        `choice ${selected ? "selected" : ""}`,
        text + badgeText,
        `onclick='select(this)' data-choice='${text}'`
    );
}

function choiceSet(id, choiceList = [], selectedItem = "") {
    return div(
        "choice-set",
        [...choiceList].map((c) => choice(id, c, c === selectedItem)).join(""),
        `id="${id}" class='secondary-nav'`
    );
}
