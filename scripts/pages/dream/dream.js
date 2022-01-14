function dreamCard(title, subtitle = "", actions = [], which = "", id = 0, image="") {
    const kind = "board"
    return card(
        kind,
        cardTitles(kind, title, subtitle, which, id),
        "",
        [],
        actions,
        image
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
            dreamCard("Santa Barbara", "California", [], "dream_board", 1,
                "images/photos/santa_barbara_1500x500.jpg"),
            dreamCard("Paris", "France", [], "dream_board", 2,
                "images/photos/paris_france.jpg"),
        ].join("")),
        "ALL NETWORK"
    );
}
