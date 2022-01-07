const connectPersonPage = (selected=false) => page(
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
        ["Friend", "Groups", "Linked"],
        ["Greg Bellowe", "Nina Marie"],
        ["share", "heart", "message"]
    ),
    "",
    "explore"
);