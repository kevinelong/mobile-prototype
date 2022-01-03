const settleList = (selected = false) => page(selected,
    "connect_chat",
    "Sunday Brunch",
    [],
    "",
    messagePanel([
        ["Are you ready for mimosas?", "KL"],
        ["Oh, so ready...", "GB"],
        ["Waffle bar is where I'm at!", "NM"],
    ], ""),
    "",
    "connect",
    [],
    ["KL", "GB", "NM"]
);