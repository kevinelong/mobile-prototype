function messageText(c) {
    return div("message-text", c);
}

function messageItem(message_item, isSamePerson) {
    console.log(message_item);
    return div(
        `message-item ${isSamePerson ? "same-person" : ""} ${
            message_item.person.isCurrentUser ? "is-current-user" : ""
        }`,
        person(message_item.person) + messageText(message_item.text)
    );
}

function messagePanel(messageList) {
    let lastItem = { person: { id: 0 } };
    console.log(lastItem);
    return div(
        "message-panel",
        [...messageList]
            .map((message_item) => {
                const OUTPUT = messageItem(
                    message_item,
                    message_item.person.id == lastItem.person.id
                );
                lastItem = message_item;
                return OUTPUT;
            })
            .join("") + inputMessage()
    );
    // const messagePanel = document.createElement("div");
    // console.log(typeof messagePanel);
    // const messageSentClass = "message-panel-sent";
    // const messageReceivedClass = "message-panel-received";
    // const messageListDivs = [];
    // const messageListReceived = [];
    // for (let i = 0; i < messageList.length; i++) {
    //     if (messageList[i][1] === "Kevin Long") {
    //         messagePanel.appendChild(
    //             div(
    //                 messageSentClass,
    //                 messageListDivs.map((mi) =>
    //                     messageItem(mi, iconColor)
    //                 ).join("") + inputMessage()
    //             )
    //         );
    //     } else {
    //         messagePanel.appendChild(
    //             div(
    //                 messageReceivedClass,
    //                 messageListDivs.map((mi) =>
    //                     messageItem(mi, iconColor)
    //                 ).join("") + inputMessage()
    //             )
    //         );
    //     }
    // }
    // return messagePanel;
    // console.log(typeof messagePanel)
    // return div(
    //     MessageSentClass,
    //     MessageListDivs.map((mi) => messageItem(mi, iconColor)).join("") +
    //         inputMessage()
    // );
}

// function messagePanelSent

function addMessage() {
    showDialog(
        "Add Message",
        contentPanel(
            choiceSet(
                "filter",
                ["My Contacts", "Groups", "Everyone"],
                "My Contacts"
            ) +
                search(peopleList) +
                row(
                    actionItem("add", "group", -1, "Group") +
                        actionItem("add", "contact", -1, "Contact")
                )
        )
    );
}
