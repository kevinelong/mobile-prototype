const EXPLORE_CARDS = EXPLORE_DATA.map(list => exploreCard(...list));

function explorePage(selected = false) {
    let lists = [];
    lists.push(cardList(EXPLORE_CARDS.join("")));

    const content = mapPanel() + row(lists.join(""));

    return page(
        selected,
        "explore",
        "Explore",
        [
            "All",
            "People &#124;" + icon("chevron_down"),
            "Things to Do &#124;" + icon("chevron_down"),
            "Restaurants &#124;" + icon("chevron_down"),
            "Lodging &#124;" + icon("chevron_down"),
        ],
        "All",
        content,
        "ALL",
        "",
        "",
        "Search the World",
        "",
        false,
        choiceSet("range", ["Nearby", "Local", "Region"], "Nearby")
    );
}
