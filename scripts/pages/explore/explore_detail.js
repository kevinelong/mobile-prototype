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
            [{ people:peopleList, title: "Liked By", groupName: "Friend", subtitle: ""}],
            ["share", "heart", "pin"]
        ),
        "",
        "explore"
    );
}
