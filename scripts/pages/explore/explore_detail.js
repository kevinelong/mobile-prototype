function exploreDetailPage(selected = false) {
    return page(
        selected,
        "explore_detail",
        "Explore Detail",
        [],
        "All",
        contentPanel(
            img("detail", "images/details.png")
        ),
        // row(cardList([EXPLORE_CARDS[1]])),
        "ALL",
        "explore",
        "",
        ""

    );
}
