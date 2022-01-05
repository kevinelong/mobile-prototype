const boardsPage = (selected=false) => page(
    selected,
    "dream",
    "Dream",
    [
        "All Boards",
        "Mine",
        "PLANNER'S",
        "FRIEND'S",
    ],
    "All Boards",
    cardList(
        card("board",
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