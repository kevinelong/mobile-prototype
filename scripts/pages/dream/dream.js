function dreamCard(title, subtitle = "", actions = [], which = "", id = 0) {
    const kind = "board"
    return card(
        kind,
        cardTitles(kind, title, subtitle, which, id),
        "",
        [],
        actions,
        ""
    );
}

function dreamPage(selected = false) {
    return page(
        selected,
        "dream",
        "Dream",
        ["All", "Personal", "Linked", "Groups", "Network"],
        "All",
        cardList([
            dreamCard("Santa Barbara", "California", [], "dream_board", 1),
            dreamCard("Paris", "France", [], "dream_board", 2),
        ].join("")),
        "ALL NETWORK"
    );
}
