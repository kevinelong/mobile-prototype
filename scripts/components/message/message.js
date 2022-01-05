const messageText = (c) => div("message-text", c);

const messageItem = (mi) => div("message-item",
    circle(icon("account-circle") + text(mi[1])) +
    messageText(mi[0])
);

const messagePanel = (messageList = [["", ""]]) => div(
    "message-panel",
    [...messageList].map(mi => messageItem(mi)).join("")
)

const addMessage = () => {
    showDialog("Add Message",
        contentPanel(
            choiceSet("filter", [
                "All People",
                "My Contacts"
            ]) +
            search([
                ["KL", "Kevin", "Long", ""],
                ["NM", "Nina", "Marie", ""],
                ["GB", "Greg", "Bellowe", ""]
            ]) +
            actionPanel(
                actionButton("close")
            )
        )
    );
}