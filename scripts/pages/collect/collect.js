function collectCard(title, subtitle = "", actions = [], which = "", id = 0, image = "", groups = []) {
    const kind = "board"
    return card(
        kind,
        cardTitles(kind, title, subtitle, which, id),
        "",
        groups,
        actions,
        image
    );
}

function collectPage(selected = false) {
    return page(
        selected,
        "collect",
        "Collect", ["All", "Local", "Americas", "Europe", "Asia", "Other"],
        "All",
        cardList([
            collectCard("Santa Barbara", "California", [], "collect_board", 1,
                "images/photos/santa_barbara_1500x500.jpg", [{
                    people: peopleList,
                    title: "Linked with",
                    groupName: "Collector",
                    subtitle: "23 cards shared"
                }]
            ),
            collectCard("Paris", "France", [], "collect_board", 2,
                "images/photos/paris_france.jpg", [{
                    people: [peopleList[JOE]],
                    title: "Linked with",
                    groupName: "Collector",
                    subtitle: "2 cards shared"
                }]
            ),
        ].join("")),
        "ALL NETWORK",
        "",
        "",
        "Find in Collection"
    );
}