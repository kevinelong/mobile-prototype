const boardsPage = (selected=false) => page(
    selected,
    "boards",
    "Dream",
    [
        "ALL NETWORK",
        "PLANNERS",
        "FRIENDS",
    ],
    "ALL NETWORK",
    cardList(
        card(
            div("titles",
                cardTitle("Europe") +
                cardSubtitle("Stuff to hit when I get to go!")
            ) +
            cardSection(
                hashTag("Personal") +
                hashTag("Dream")
            ),
            "",
            [],
            ["open"],
            ""
        )
    ),
    "ALL NETWORK"
);