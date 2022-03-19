function choice(kind, text, selected = false, index = -1) {
    const encoded = cleanName(text);
    return div(
        `choice ${selected ? "selected" : ""}`,
        text,
        ` onclick="selectItem(this,'${kind}',${index},'${encoded}');" data-kind="${kind}"  data-choice="${encoded}" `
    );
}

function choiceSet(kind, choiceList = [], selectedItem = "", pageName, prefix="", postfix="") {
    if (choiceList.length === 0) {
        return "";
    }
    return div(
        "choice-set",
        prefix +
        [...choiceList].map(
            (c, i) => choice(kind, c, c === selectedItem, i)
        ).join("") + postfix,
        `id="${kind}" class='secondary-nav'`
    )
}
