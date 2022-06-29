function exploreDetailPage(selected = false, index = JOE) {
    const who = peopleList[index];
    return page(
        selected,
        "explore_detail",
        "Explore Detail",
        [],
        "All",
        
        row(
            img("", "images/icons/icon-activity-red.svg") +
            col(
                title("Bridlewood Estate - Wine & food testing tour") +
                text("Santa Barbara")
            ) +
            img("", "images/icons/icon-open-black.svg")
        ) +
        row (
            div("", `${cardPeople(who.groups[2], -1, 2, who.groups)}`)
        ),
        
        // row(cardList([EXPLORE_CARDS[1]])),
        "ALL",
        "explore",
        "",
        ""

    );
}
