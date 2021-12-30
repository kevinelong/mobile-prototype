const peoplePage = (selected=false) => page(
    selected,
    "people",
    "People",
    [
        "All Members",
        "My Contacts",
    ],
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
    "All Members",
    cardList(
        card(
            div("titles",
                cardTitle("Three Amigos") +
                cardSubtitle("Sunday Brunch?")
            ) +
            cardSection(""
            ),
            messagePanel([
                ["Are you ready for bottomless mimosas?", "KL"],
                ["Oh, so ready...", "GB"],
                ["Waffle bar is where I'm at!", "NM"],
            ]),
            ["KL", "GB", "NM"],
            ["share", "heart", "pin"],
            "images/cannon-beach.jpg"
        )
     +
        card(
            cardTitleText("Group Topic") +
            hashTag("Linked"),
            "Body of the text message.",
            ""
        )
    ),
    "ALL NETWORK"
);