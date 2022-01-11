const connectPage = (selected = false) => page(
    selected,
    "connect",
    "Connect",
    [
        "All",
        "Personal",
        "Group",
        "Notifications",
    ],
    "All",
    cardList([

        connectCard([], "What's Up?", "Saturday 11:05am", "1",
            ["Kevin Ernest Long"],
            "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=52%3A9886&scaling=min-zoom&page-id=1%3A995&starting-point-node-id=52%3A9817&show-proto-sidebar=0"
        ),

        connectCard([
            ["I'm thinking about brunch on Sunday.", "KL"],
            ["Are you ready for mimosas?", "KL"],
            ["Oh, so ready...", "GB"],
            ["Waffle bar is where I'm at!", "NM"],
        ], "Group Chat", "The Three Amigos", "", [
            "Kevin Long", "Greg Bellowe", "Nina Marie"
        ]),

        exploreCardNotification(11, "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=726%3A5745&scaling=min-zoom&page-id=1%3A995&starting-point-node-id=765%3A1510&show-proto-sidebar=1"),

        boardNotificationCard("Kevin", 2, "Santa Barbara"),

        planCard(
            "Plan Invite",
            "Pinball Museum",
            "Santa Barbara<br>" +
            "Tuesday March 3rd 2022 at Noon.<br>" +
            "Plan Invitation",
            ["Greg"],
            ["decline", "accept"]
        ),
        settleCard(
            "Three Amigos", "$3.00", "Yesterday 12/12/2022"),
        settleCard("Kevin Long", "$1.23", "Yesterday 01/1/2023")
    ].join("")),
    "",
    "",
    actionItem("add")
);