function broadcastPage(selected = false) {

    const defaultLocation = "Santa Barbara";
    const itemCount = 11;
    const community_content = cardList(
        [
            planCard(
                "Santa Barbara",
                "Tuesday September 3rd<br>Monday September 9th",
                "Hi all, I am heading to Santa Barbara for the weekend and would love some ideas from any that’s been there :)" +
                actionItem("add", "idea", -1, "Add Idea"),
                [{
                    people: [peopleList[JOE], peopleList[BF]],
                    title: "Ideas from",
                    groupName: "Curator",
                    subtitle: "2 ideas submitted."
                }],
                [],
                "images/photos/santa_barbara_1500x500.jpg"
            ),
            planCard(
                "Paris France",
                "Tuesday September 3rd<br>Monday September 9th",
                "I am planning a trip to Paris this summer and am searching for ideas.",
                [{
                    people: [peopleList[JOE], peopleList[BF]],
                    title: "Ideas from",
                    groupName: "Curator",
                    subtitle: "2 ideas submitted."
                }],
                [],
                "images/photos/paris_france.jpg"
            )
        ].join(""));

    const my_broadcasts = cardList(
        [
            planCard(
                "London England",
                "Tuesday September 3rd<br>Monday September 9th",
                "Hi all, I am heading to London for a week in July and would love some ideas from any that’s been there :)" +
                actionItem("edit", "broadcast", -1, "Edit Broadcast"),
                [{
                    people: [peopleList[RUBY]],
                    title: "Request From",
                    groupName: "You!",
                    subtitle: "2 Views."
                },{
                    people: [peopleList[JOE],peopleList[BF]],
                    title: "Ideas From",
                    groupName: "Taste Match",
                    subtitle: "13 Ideas!"
                }],
                [],
                "images/photos/london.png"
            )
        ].join(""));

    const page_content =     tabSet(name, [
        {name: "Community", content: community_content},
        {name: "My Broadcasts", content: my_broadcasts},
    ], "Community");

    return page(
        selected,
        "broadcast",
        "broadcast",
        [],
        "",
        page_content,
        "",
        "",
        "",
        "Find Broadcast Responses");
}
