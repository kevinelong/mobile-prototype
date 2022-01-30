function choice(kind, text, selected = false, index = -1) {
    const encoded = cleanName(text);
    return div(
        `choice ${selected ? "selected" : ""}`,
        text,
        ` onclick="select(this,'${kind}',${index},'${encoded}');" data-kind="${kind}"  data-choice="${encoded}" `
    );
}

function choiceSet(kind, choiceList = [], selectedItem = "") {
    return div(
        "choice-set",
        [...choiceList].map(
            (c, i) => choice(kind, c, c === selectedItem, i)
        ).join(""),
        `id="${kind}" class='secondary-nav'`
    );
}
