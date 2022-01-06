const connectPage = (selected = false) => page(
    selected,
    "connect",
    "Connect",
    [
        "All",
        "Personal",
        "Group",
    ],
    "All",
    cardList(
        exploreCardNotification(11) +
        boardCard("Kevin", 2) +
        planCard("Greg", "Pinball Museum") +
        settleCard("Three Amigos - Monday 1/3/2022", "$3.00") +
        connectCard("Connect", "Sunday Brunch")
    ),
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
