function planPage(selected = false) {
    return page(
        selected,
        "plan",
        "Plan",
        ["All", "Past", "Present", "Future"],
        "Present",
        cardList(
            planCard(
                "Santa Barbara",
                "Tuesday March 3rd<br>Monday March 10th",
                "8 Activities Planned",
                [{
                    people: peopleList,
                    title: "Going with",
                    groupName: "Co-Planner",
                    subtitle: "8 activities planned"
                }]
            ) +
                planCard(
                    "Paris France",
                    "Tuesday September 3rd<br>Monday September 9th",
                    "12 Activities Planned",
                    [{
                        people: [peopleList[JOE]],
                        title: "Going with",
                        groupName: "Co-Planner",
                        subtitle: "2 activities planned"
                    }]
                )
        )
    );
}
