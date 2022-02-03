function sample(period) {
    return timelineCard(
        "timeline",
        "12:33am",
        "1.5 Hours",
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_three,
        ["favorite", "rate", "verify", "notify"],
        "2",
        "dining",
        3,
        period
    );
}

const periods = ["breakfast", "lunch", "dinner", "late-night"];

const timelineContent = cardList([
    cardListSection(
        "Friday 12/12/2022",
        actionItem("add-place", "timeline", -1, "add", "black"),
        "Santa Barbara",
        periods.map(sample)
    ),
    cardListSection(
        "Saturday 12/13/2022",
        actionItem("add-place", "timeline", -1, "add", "black"),
        "Santa Barbara",
        periods.map(sample)
    ),
    cardListSection(
        "Sunday 12/14/2022",
        actionItem("add-place", "timeline", -1, "add", "black"),
        "Santa Barbara",
        periods.map(sample)
    ),
].join(""));

function timelinePage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;

    return page(
        selected,
        "timeline",
        "Timeline",
        [
            "Go!",
            "Check-Ins",
            "Pay/Settle",
            "Rate/Review",
            "Verify for Offset",
            "Memories"
        ],
        "Go!",
        timelineContent,
        "",
        "",
        actionItem("add", "plan", -1, "", "black", false),
        "Find what?",
        "",
        ""
        // tabSet(name, [
        //     {name: "Timeline", content: timelineContent},
        //     {name: "Messages", content: messagesContent},
        // ], "Timeline")
    );
}
