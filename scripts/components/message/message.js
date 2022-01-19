function messageText(c) {
    return div("message-text", c);
}

function messageItem(mi, iconColor) {
    let className = ""
    if (mi[1] === "Kevin Long") {
        className = "message-item-sender"
    } else {
        className = "message-item"
    }
    return div(
        className,
        person("person", mi[1]) +
            // circle(icon("person", iconColor ) + text(mi[1])) +
            messageText(mi[0])
    );
}

function messagePanel(messageList = [["", ""]], iconColor = "black") {
    MessageSentClass = "message-panel-sent";
    MessageReceivedClass = "message-panel-received";
    const MessageListSent = [];
    const MessageListReceived = [];
    for (let i = 0; i < messageList.length; i++) {
        if (messageList[i][1] == "Kevin Long") {
            MessageListSent.push(messageList[i]);
        } else {
            MessageListReceived.push(messageList[i]);
        }
    }
    // return div(
    //     "message-panel",
    //     [...messageList].map((mi) => messageItem(mi, iconColor)).join("") +
    //         inputMessage()
    // );
     return div(
         MessageSentClass,
         MessageListSent.map((mi) => messageItem(mi, iconColor)).join("") +
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
