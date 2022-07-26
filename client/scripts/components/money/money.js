function moneyText(c) {
    return div("money-text", c);
}

function moneyItem(rowData, index) {
    return div(
        `money-item ${index}`,
        (index===0 ? "" : person(rowData[1])) +
        moneyText(rowData[2]) +
        moneyText(rowData[3]) +
        a(moneyText(rowData[0]), `javascript:showPage('settle_list','${index}')`)
    );
}

function moneyPanel(messageList = [["", ""]]) {
    return div("money-panel", [...messageList].map(moneyItem).join(""));
}
