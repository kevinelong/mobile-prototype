function collectBoardPage(selected = false) {


    return page(
        selected,
        "collect_board",
        "Santa Barbara", [
            icon("all") + "All",
            icon("ideas") + "Ideas",
            icon("favorites") + "Favorites",
            icon("going", "", "Going"),
        ],
        icon("all") + "All",
        // cardGroups(currators) +
        mapPanel() +
        activityList(activityData),
        "all",
        "collect"
    );
}