function messageText(c) {
    return div("message-text", c);
}

function messageItem(message_item, isSamePerson) {
    //   console.log(message_item)
    return div(
        `message-item ${isSamePerson ? "same-person" : ""} ${
            message_item.person.isCurrentUser ? "is-current-user" : ""
        }`,
        person(message_item.person) + messageText(message_item.text)
    );
}

function messagePanel(messageList) {
    let lastItem = {person: {id: 0}};
    return div(
        "message-panel",
        [...messageList].map(message_item => {
                const OUTPUT = messageItem(message_item, message_item.person.id === lastItem.person.id);
                lastItem = message_item;
                return OUTPUT;
            }).join("") + inputMessage()
    );
}


function addMessage() {
    showSearch("Add Message");
}
