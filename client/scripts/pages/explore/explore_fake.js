function exploreFakePage(selected = false) {
    return page(
        selected,
        "explore_detail",
        "Explore Detail",
        [],
        "All",
        contentPanel(
            img("detail", "images/from-figma/cards_post_taste_match.png")
        ),
        // row(cardList([EXPLORE_CARDS[1]])),
        "ALL",
        "explore",
        "",
        ""

    );
}
