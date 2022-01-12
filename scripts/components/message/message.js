function messageText(c) {
    return div("message-text", c);
}

function messageItem(mi, iconColor) {
    return div(
        "message-item",
        person("person", mi[1]) +
            // circle(icon("person", iconColor ) + text(mi[1])) +
            messageText(mi[0])
    );
}

function messagePanel(messageList = [["", ""]], iconColor = "black") {
    return div(
        "message-panel",
        [...messageList].map((mi) => messageItem(mi, iconColor)).join("") +
            inputMessage()
    );
}

function addMessage() {
    showDialog(
        "Connect to People",
        contentPanel(
            choiceSet(
                "filter",
                ["My Contacts", "Groups", "Everyone"],
                "My Contacts"
            ) +
                search([
                    ["KL", "Kevin", "Long", ""],
                    ["NM", "Nina", "Marie", ""],
                    ["GB", "Greg", "Bellowe", ""],
                ]) +
                row(
                    actionItem("add", "", "", "Group") +
                        actionItem("add", "", "", "Contact")
                )
        )
    );
}
