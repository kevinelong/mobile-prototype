const activityCard = (title, subtitle="") => card("board",
    div("titles",
        cardTitle(title) +
        cardSubtitle(subtitle)
    ),
    "",
    [],
    ["open"],
    ""
)

const boardsDetailsPage = (selected = false) => page(
    selected,
    "dream",
    "Dream",
    [
        "All",
        "Activities",
        "Dining",
        "Landmarks",
        "Lodging",
    ],
    "All",
    cardList(
        activityCard("Paris, France") +
        activityCard("Santa Barbara")
    ),
    "ALL NETWORK"
);