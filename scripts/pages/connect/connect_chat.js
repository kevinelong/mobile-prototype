function connectChatPage(selected = false) {
    return page(
        selected,
        "connect_chat",
        "Sunday Brunch",
        [],
        "",
        messagePanel(messageListExample),
        "",
        "connect",
        [],
        ["Kevin Long", "Greg Bellowe", "Nina Marie"]
    );
}
