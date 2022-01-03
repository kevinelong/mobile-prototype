const explorePage = (selected=false) => page(
    selected,
    "explore",
    "Explore",
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
        exploreCardNotification(3) +
        // card("explore",
        //     div("titles",
        //         cardTitle("Commonwealth of Massachusetts") +
        //         cardSubtitle("New England, United States of America")
        //     ) +
        //     cardSection(
        //         hashTag("Landmark") +
        //         hashTag("Recommended")
        //     ),
        //     "NOTE: I like Paris in the springtime.",
        //     ["KL", "GB"],
        //     ["share", "heart", "pin"],
        //     "images/photos/cannon-beach.jpg"
        // ) +
        card("explore",
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