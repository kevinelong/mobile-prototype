const peoplePage = () => page(
    "people",
    "People",
    [
        "ALL NETWORK",
        "PLANNERS",
        "FRIENDS",
        "CONFIRMATIONS",
        "NEW PEOPLE",
        "MATCHES",
        "DEALS"
    ],
    "ALL NETWORK",
    cardList(
        card(
            hashTag("Linked") +
            cardTitleText("Group Topic"),
            "",
            "Body of the text message.",
            ""
        )
    ),
    "ALL NETWORK"
);