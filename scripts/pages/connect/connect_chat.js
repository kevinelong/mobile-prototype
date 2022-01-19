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
                ["Where is the waffle bar again?", "Kevin Long"],
                ["Don't worry about it, I'm driving this time", "Nina Marie"]
            ],
            "black"
        ),
        "",
        "connect",
        [],
        ["Kevin Long", "Greg Bellowe", "Nina Marie"]
    );
}
