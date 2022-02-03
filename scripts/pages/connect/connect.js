
function connectPage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;
    const timelineContent = [
        choiceSet(
            "timeline",
            [
                "Go!",
                "Check-Ins",
                "Pay/Settle",
                "Rate/Review",
                "Verify for Offset",
                "Memories"
            ],
            "Go!"
        ),
        cardList([
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
        ].join("")),
    ].join("");

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
                        `${itemCount} new items added to your linked ${defaultLocation} dream board by your friend ${peopleList[BF].name
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
                    ["decline", "counter", "accept"]
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
                    ["rate", "review", "check-in"]
                ),
                planCard(
                    "Verify",
                    "Yesterday's Transportation",
                    "Verify to earn Vita Rewards",
                    [],
                    ["verify"]
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
        messagesContent
    );
}
