function moneyText(c) {
    return div("money-text", c);
}

function moneyItem(mi) {
    return div(
        "money-item",
        person("person", mi[1]) +
            // circle(icon("person") + text(mi[1])) +
            moneyText(mi[2]) +
            moneyText(mi[3]) +
            a(moneyText(mi[0]), "javascript:showPage('settle_list')")
    );
}

function moneyPanel(messageList = [["", ""]]) {
    return div(
        "money-panel",
        [...messageList].map((mi) => moneyItem(mi)).join("")
    );
}
