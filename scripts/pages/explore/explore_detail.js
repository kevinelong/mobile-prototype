function exploreDetailPage(selected = false) {
    return page(
        selected,
        "explore_detail",
        "Explore Detail",
        [],
        "All",
        row(cardList([EXPLORE_CARDS[1]])),
        "ALL",
        "explore",
        "",
        ""

    );
}
