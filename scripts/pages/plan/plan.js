const planPage = (selected = false) => page(
    selected,
    "plan",
    "Plan",
    [
        "All",
        "Personal",
        "Linked",
        "Groups",
        "Network",
    ],
    "All",
    cardList(
        planCard(
            "Santa Barbara",
            "Tuesday March 3rd<br>Monday March 10th",
            "8 Activities Planned"
        ) +
        planCard(
            "Paris France",
            "Tuesday September 3rd<br>Monday September 9th",
            "12 Activities Planned"
        )
))