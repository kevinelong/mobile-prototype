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
        exploreCard(
            "images/photos/cannon-beach.jpg",
            "Haystack Rock",
            "Cannon Beach, Oregon",
            "This is an iconic photo opportunity",
            ["Landmark", "Recommended"],
            ["KL", "GB"],
            ["share", "heart", "pin"],
        )
    ),
    "ALL NETWORK"
);