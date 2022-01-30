function choice(id, text, selected = false, badgeText = "") {
    const data = encodeURI(text);
    return div(
        `choice ${selected ? "selected" : ""}`,
        text + badgeText,
        ` onclick="select(this,'${id}','${data}');" `
    );
}

function choiceSet(id, choiceList = [], selectedItem = "") {
    return div(
        "choice-set",
        [...choiceList].map(c => choice(id, c, c === selectedItem)).join(""),
        `id="${id}" class='secondary-nav'`
    );
}
