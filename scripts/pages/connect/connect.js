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

        connectCard([
            ["I'm thinking about brunch on Sunday.", "KL"],
            ["Are you ready for mimosas?", "KL"],
            ["Oh, so ready...", "GB"],
            ["Waffle bar is where I'm at!", "NM"],
        ],"Group Chat", "The Three Amigos"),

        exploreCardNotification(11),
        boardCard("Kevin", 2, "Santa Barbara"),
        planCard(
            "Plan Invite",
            "Pinball Museum",
            "Santa Barbara<br>"+
            "Tuesday March 3rd 2022 at Noon.<br>"+
            "Plan Invitation",
            ["Greg"],
            ["decline", "accept"]
        ),
        settleCard("Three Amigos - Monday 1/3/2022", "$3.00")
    ].join("")),
    "",
    "",
    actionItem("add")
);

// [
//     "ALL NETWORK",
//     "GROUPS",
//     "PLANNERS",
//     "FRIENDS",
//     "CONFIRMATIONS",
//     "NEW PEOPLE",
//     "MATCHES",
//     "DEALS"
// ],
