function collectBoardPage(selected = false) {


    return page(
        selected,
        "collect_board",
        "Santa Barbara", [
            icon("all") + "All",
            icon("ideas") + "Ideas",
            icon("favorites") + "Favorites",
            icon("going", "", "going"),
        ],
        icon("all") + "All",
        cardGroups(collecters) +
        activityList(activityData),
        "all",
        "collect"
    );
}