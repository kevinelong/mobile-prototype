function collectBoardPage(selected = false) {
    return page(
        selected,
        "collect_board",
        "Santa Barbara",
        [
            icon("all") + "All",
            icon("ideas") + "Ideas",
            icon("favorites") + "Favorites",
            icon("going", "", "Going"),
        ],
        icon("all") + "All",
        // cardGroups(curators) +
        mapPanel() +
        button(
            "Collect All Pins",
            "collectAllPins()",
            "collect-all"
        ) +
        activityList(activityData, true),
        "all",
        "collect",
        "",
        "",
        "",
        false,
        col(
            row(
                choiceSet(
                    "range",
                    [
                        "Nearby",
                        "Local",
                        "Region",
                        "Country"
                    ],
                    "Nearby"
                ) +
                select(
                    "my-collections",
                    [
                        {name: "My Collections"},
                        {name: "Santa Barbara"},
                        {name: "Paris"},
                        {name: "Las Vegas"}
                    ]
                )
            )
        )
    );
}