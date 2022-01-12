function exploreDetailPage(selected = false) {
    return page(
        selected,
        "explore_detail",
        "Explore Details",
        [],
        "",
        exploreDetail(
            "images/photos/cannon-beach.jpg",
            "Haystack Rock",
            "Cannon Beach, Oregon",
            "This is an iconic photo opportunity",
            ["Landmark", "Recommended"],
            ["Kevin Long", "Greg Bellowe", "Nina Marie"],
            ["share", "heart", "pin"]
        ),
        "",
        "explore"
    );
}
