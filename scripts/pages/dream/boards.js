const boardCard2 = (title, subtitle="") => card("board",
    div("titles", cardTitle(title) + cardSubtitle(subtitle)),
    "", [], ["open"], ""
)

const boardsPage = (selected = false) => page(
    selected,
    "dream",
    "Dream",
    [
        "All",
        "Personal",
        "Linked",
        "Groups",
        "Network",
    ],
    "All",
    cardList(
        boardCard2("Paris, France") +
        boardCard2("Santa Barbara")
    ),
    "ALL NETWORK"
);