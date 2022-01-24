function dreamCard(title, subtitle = "", actions = [], which = "", id = 0, image="", groups=[]) {
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

function dreamPage(selected = false) {
    return page(
        selected,
        "dream",
        "Dream",
        [],
        "All",
        cardList([
            dreamCard("Santa Barbara", "California", [], "dream_board", 1,
                "images/photos/santa_barbara_1500x500.jpg",
                [{
                    people: peopleList,
                    title: "Linked with",
                    groupName: "Dreamer",
                    subtitle: "23 cards shared"
                }]
            ),
            dreamCard("Paris", "France", [], "dream_board", 2,
                "images/photos/paris_france.jpg",
                [{
                    people: [peopleList[JOE]],
                    title: "Linked with",
                    groupName: "Dreamer",
                    subtitle: "2 cards shared"
                }]
            ),
        ].join("")),
        "ALL NETWORK"
    );
}
