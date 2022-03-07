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
        "Collect",
        [
            "Nearby",
            "Local",
            "Region/State",
            "Country"
        ],
        "Nearby",
        helpText(
            "Start a new Collection to begin creating you own personal destination guide. Then add your Favorites, New Ideas, and recommendations from your friends and people you trust."
        ) +
        button("Create New Collection", action("add","collection")) +
        cardList([
            collectCard("Santa Barbara", "California", [], "collect_board", 1,
                "images/photos/santa_barbara_1500x500.jpg", [
                    {
                    people: peopleList,
                    title: "Linked with",
                    groupName: "Curator",
                    subtitle: "23 cards shared"
                },
                    {
                        people: peopleList,
                        title: "Related Collections",
                        groupName: "Person",
                        subtitle: "from 23"
                    },
                ]
            ),
            collectCard("Paris", "France", [], "collect_board", 2,
                "images/photos/paris_france.jpg", [
                    {
                    people: [peopleList[JOE]],
                    title: "Linked with",
                    groupName: "Curator",
                    subtitle: "2 cards shared"
                }
                ]
            ),
        ].join("")),
        "ALL NETWORK",
        "",
        "",
        "Find in Your Collections",
        "",
        false,
        "",
        actionItem("add", "cardItem", -1, "Card", "black", false, 0)


    );
}