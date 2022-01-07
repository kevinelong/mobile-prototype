const messageText = (c) => div("message-text", c);

const messageItem = (mi, iconColor) => div("message-item",
    person("person", mi[1]) +
    // circle(icon("person", iconColor ) + text(mi[1])) +
    messageText(mi[0])
);

const messagePanel = (messageList = [["", ""]], iconColor="black") => div(
    "message-panel",
    [...messageList].map(mi => messageItem(mi, iconColor)).join("") +
    inputMessage()
);

const addMessage = () => {
    showDialog("Who?",
        contentPanel(
            choiceSet("filter", [
                "My Contacts",
                "Groups",
                "Everyone"
            ], "My Contacts") +
            search([
                ["KL", "Kevin", "Long", ""],
                ["NM", "Nina", "Marie", ""],
                ["GB", "Greg", "Bellowe", ""]
            ]) +row(
            actionItem("add", "", "", "Group") +
            actionItem("add", "", "", "Contact")
            )
        )
    );
}