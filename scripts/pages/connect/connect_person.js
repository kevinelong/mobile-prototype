function connectPersonPage(selected = false) {
    return page(
        selected,
        "connect_person",
        "Contact", [],
        "",
        connectPersonDetail(
            "images/photos/kevinelong.jpg",
            "Kevin Ernest Long",
            "Friend and Collaborator",
            "Kevin is the creator of cool.", ["Santa Barbara", "London"], [
                { people: peopleList, title: "Linked With", groupName: "Collector", subtitle: "123 shared cards" },
                { people: peopleList, title: "Friends With", groupName: "Explorer", subtitle: "23 taste matches" },
                { people: peopleList, title: "Plans With", groupName: "Co-Planner", subtitle: "34 plans" },
            ], ["share", "heart", "message"]
        ),
        "",
        "explore"
    );
}