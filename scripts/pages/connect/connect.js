function connectPage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;
    const timelineContent = choiceSet(
            "timeline",
            [
                "All",
                "Check-Ins",
                "Pay/Settle",
                "Rate/Review",
                "Verify for Offset",
                "Memories"
            ], "All") +


        // titleRow("timeline", "timeline", -1) +
        cardList(
            sectionTitle(
                title("Friday 12/12/2022") +
                actionItem("add-place", "timeline", -1, "add", "black")
            ) +
            subtitle("Santa Barbara") +
            [
                timelineCard(
                    "Breakfast",
                    "8:33am",
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
                    3
                )
            ].join("")
        );

    const messagesContent = choiceSet(
            "connect",
            [
                "All",
                "1 on 1",
                "Group Chat",
                "Notifications"
            ], "All"
        ) +
        cardList(
            [
                connectCard(
                    [],
                    "I can join you on Saturday and Sunday",
                    "Thursday June 17th 10:23am",
                    0,
                    [{
                        people: [peopleList[BF]],
                        title: "Connecting with",
                        groupName: "Participant",
                        subtitle: "in 1 on 1 conversation."
                    }],
                    "connect_chat"
                ),
                connectCard(
                    messageListExample,
                    "Group Chat",
                    peopleList.map(p => p.name).join(", "),
                    0,
                    [{
                        people: peopleList,
                        title: "Connecting with",
                        groupName: "Participant",
                        subtitle: "in group conversation."
                    }],
                    "connect_chat"
                ),
                exploreCardNotification(
                    13,
                    [{
                        people: peopleList,
                        title: "Liked By",
                        groupName: "Explorer",
                        subtitle: "including 2 taste matches!"
                    }]
                ),
                // exploreCard(
                //     "",
                //     "London July",
                //     "Broadcast Response",
                //     "Love this bar!",
                //     [],
                //     [{ people:[peopleList[1]], title: "Liked By", groupName: "Explorer", subtitle: "including 2 taste matches!"}],
                //     ["explore_detail"],
                //     "1",
                // ),
                dreamCardNotification(
                    [{
                        people: [peopleList[1]],
                        title: "linked with",
                        groupName: "dreamer",
                        subtitle: "23 shared cards"
                    }],
                    2,
                    defaultLocation,
                    text(
                        `${itemCount} new items added to your linked ${defaultLocation} dream board by your friend ${
                            peopleList[BF].name
                        }.`
                    ),
                    ["dream"]
                ),
                dreamCardNotification(
                    [],
                    2,
                    "Santa Barbara",
                    "New taste match!",
                    ["match"]
                ),
                planCard(
                    "Plan Invite",
                    "Yoichi's",
                    "Santa Barbara<br>" +
                    "Tuesday March 3rd 2022 at Noon.<br>" +
                    "Plan Invitation",
                    [{
                        people: [peopleList[0], peopleList[1]],
                        title: "Going",
                        groupName: "Co-Planner",
                        subtitle: ""
                    }],
                    ["decline", "counter", "accept"],
                    "plan_invite"
                ),
                settleCard(
                    [peopleList[BF]],
                    "$123.45",
                    "Yesterday 12/12/2022",
                    "Pay",
                    -1,
                    "NET - All Items",
                    13,
                    "Santa Barbara"
                ),
                settleCard(
                    [peopleList[JOE]],
                    "$80.00",
                    "Yesterday 11/21/2022",
                    "Received",
                    -1,
                    "Golf",
                    3,
                    "Santa Barbara",
                    ["acknowledge"]
                ),
                settleCard(
                    [peopleList[BF]],
                    "$12.34",
                    "Yesterday 11/21/2022",
                    "received",
                    -1,
                    "Coffee",
                    4,
                    "Santa Barbara",
                    ["accept"],
                ),
                planCard(
                    "Check In and Rate",
                    "Brasil Arts Cafe",
                    "Check in and rate to earn Vita Rewards",
                    [],
                    ["rate", "review", "check-in"],
                    "plan"
                ),
                planCard(
                    "Verify",
                    "Yesterday's Transportation",
                    "Verify to earn Vita Rewards",
                    [],
                    ["verify"],
                    "plan"
                ),
            ].join("")
        );

    return page(
        selected,
        "connect",
        "Connect",
        [],
        "All",
        "",
        "",
        "",
        actionItem("add", "message", -1, "", "black", false),
        "Find what?",
        tabSet(name, [
            {name: "Timeline", content: timelineContent},
            {name: "Messages", content: messagesContent},
        ], "Messages")
    );
}
