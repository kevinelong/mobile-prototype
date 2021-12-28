const boardsPage = (selected=false) => page(
    selected,
    "boards",
    "Boards",
    [
        "ALL NETWORK",
        "PLANNERS",
        "FRIENDS",
    ],
    "ALL NETWORK",
    cardList(
        card(
            div("titles",
                cardTitle("Commonwealth of Massachusetts") +
                cardSubtitle("New England, United States of America")
            ) +
            cardSection(
                hashTag("Landmark") +
                hashTag("Recommended")
            ),
            "NOTE: I like Paris in the springtime.",
            ["KL", "GB"],
            ["share", "heart", "pin"],
            "images/cannon-beach.jpg"
        ) +
        card(
            div("titles",
                cardTitle("Eiffel Tower") +
                cardSubtitle("Paris, France")
            ) +
            cardSection(
                hashTag("Landmark") +
                hashTag("Recommended")
            ),
            "NOTE: I like Paris in the springtime.",
            ["KL", "GB"],
            ["share", "heart", "pin"]
        )
    ),
    "ALL NETWORK"
);