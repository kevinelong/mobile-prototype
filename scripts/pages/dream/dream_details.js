function activityCard(title, subtitle = "") {
    return card(
        "board",
        div("titles", cardTitle(title) + cardSubtitle(subtitle)),
        "",
        [],
        ["open"],
        ""
    );
}

function boardsDetailsPage(selected = false) {
    return page(
        selected,
        "dream",
        "Dream",
        ["All", "Activities", "Dining", "Landmarks", "Lodging"],
        "All",
        cardList(activityCard("Paris, France") + activityCard("Santa Barbara")),
        "ALL NETWORK"
    );
}
