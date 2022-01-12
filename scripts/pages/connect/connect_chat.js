function connectChatPage(selected = false) {
    return page(
        selected,
        "connect_chat",
        "Sunday Brunch",
        [],
        "",
        messagePanel(
            [
                ["Are you ready for mimosas?", "Kevin Long"],
                ["Oh, so ready...", "Greg Bellowe"],
                ["Waffle bar is where I'm at!", "Nina Marie"],
            ],
            "black"
        ),
        "",
        "connect",
        [],
        ["Kevin Long", "Greg Bellowe", "Nina Marie"]
    );
}
