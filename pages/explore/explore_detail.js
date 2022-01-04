const exploreDetailPage = (selected=false) => page(
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
        ["KL", "GB"],
        ["share", "heart", "pin"]
    ),
    "",
    "explore"
);