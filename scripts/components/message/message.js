const messageText = (c) => div("message-text", c);

const messageItem = (mi) => div("message-item",
    circle(icon("account-circle") + mi[1]) +
    messageText(mi[0])
);

const messagePanel = (messageList = [["", ""]]) => div(
    "message-panel",
    [...messageList].map(mi => messageItem(mi)).join("")
)