const moneyText = (c) => div("money-text", c);

const moneyItem = (mi) => div("money-item",
    circle(icon("person") + text(mi[1])) +
    moneyText(mi[2]) +
    moneyText(mi[3]) +
    a(moneyText(mi[0]), "javascript:showPage('settle_list')")
);

const moneyPanel = (messageList = [["", ""]]) => {
    return div("money-panel",
        [...messageList].map(mi => moneyItem(mi)).join("")
    )
}