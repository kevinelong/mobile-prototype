

function dreamBoardPage(selected = false) {


    return page(
        selected,
        "dream_board",
        "Santa Barbara",
        [
            icon("all") + "All",
            icon("ideas") + "Ideas",
            icon("favorites") + "Favorites",
            icon("going","","going"),
        ],
        "All",
        cardGroups(dreamers) +
        activityList(activityData),
        "all",
        "dream"
    );
}
