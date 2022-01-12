function boardCard2(title, subtitle = "") {
    return card(
        "board",
        div("titles", cardTitle(title) + cardSubtitle(subtitle)),
        "",
        [],
        ["open"],
        ""
    );
}

function boardsPage(selected = false) {
    return page(
        selected,
        "dream",
        "Dream",
        ["All", "Personal", "Linked", "Groups", "Network"],
        "All",
        cardList(boardCard2("Paris, France") + boardCard2("Santa Barbara")),
        "ALL NETWORK"
    );
}
