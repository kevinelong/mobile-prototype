function collectBoardPage(selected = false) {
    return page(
        selected,
        "collect_board",
        "Santa Barbara",
        [],
        "",
        // cardGroups(curators) +
        button(
            "Collect All Pins",
            "collectAllPins()",
            "collect-all"
        ) +
        choiceSet("collect",[
            icon("all") + "All",
            icon("ideas") + "Ideas",
            icon("favorites") + "Favorites",
            icon("going", "", "Going"),
        ], icon("all") + "All") +
        mapPanel() +
        choiceSet("activities-list", [
                "All",
                "People",
                "Things to Do",
                "Restaurants",
                "Lodging"
            ], "All") +
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