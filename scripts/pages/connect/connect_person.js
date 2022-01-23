function connectPersonPage(selected = false) {
    return page(
        selected,
        "connect_person",
        "Contact",
        [],
        "",
        connectPersonDetail(
            "images/photos/kevinelong.jpg",
            "Kevin Ernest Long",
            "Friend and Collaborator",
            "Kevin is the creator of cool.",
            ["Santa Barbara", "London"],
            peopleList,
            ["share", "heart", "message"]
        ),
        "",
        "explore"
    );
}
