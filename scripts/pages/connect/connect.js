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
            ["Kevin Ernest Long"]
        ),

        connectCard([
            ["I'm thinking about brunch on Sunday.", "KL"],
            ["Are you ready for mimosas?", "KL"],
            ["Oh, so ready...", "GB"],
            ["Waffle bar is where I'm at!", "NM"],
        ], "Group Chat", "The Three Amigos", "", [
            "Kevin Long", "Greg Bellowe", "Nina Marie"
        ]),

        exploreCardNotification(11),
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