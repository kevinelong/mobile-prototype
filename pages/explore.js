const explorePage = () => page(
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
        card(
            hashTag("Recommended") + cardTitle("Paris"),
            "",
            "",
            ["Kevin", "Greg"],
            ["Pin to Board"]
        )
    ),
    "ALL NETWORK"
);