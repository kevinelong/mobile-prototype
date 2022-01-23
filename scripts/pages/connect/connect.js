function connectPage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;
    return page(
        selected,
        "connect",
        "Connect",
        ["All", "1 on 1", "Group Chat", "Notifications"],
        "All",
        cardList(
            [
                connectCard(
                    [],
                    "I can join you on Saturday and Sunday",
                    "Thursday June 17th 10:23am",
                    "1",
                    [peopleList[BF]],
                    "connect_chat"
                ),
                connectCard(
                    messageListExample,
                    "Group Chat",
                    "Joe Shmoe, Betty Ford, Ruby Red",
                    "",
                    [peopleList[0], peopleList[1], peopleList[2]],
                    "connect_chat"
                ),
                exploreCardNotification(13, "explore"),
                exploreCard(
                    "",
                    "London July",
                    "Broadcast Response",
                    "Love this bar!",
                    [],
                    [peopleList[1]],
                    [],
                    "1",
                    "explore_detail",
                    "Recommended",
                    "Friend"
                ),
                dreamCardNotification(
                    [peopleList[BF]],
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
                    [peopleList[0]],
                    ["decline", "counter", "accept"],
                    "plan_invite"
                ),
                settleCard(
                    peopleList[BF],
                    "$23.00",
                    "Yesterday 12/12/2022",
                    "Pay",
                    "Santa Barbara",
                    "settle_detail"
                ),
                settleCard(
                    peopleList[0],
                    "$80.00",
                    "Yesterday 11/21/2022",
                    "Received",
                    "",
                    "settle"
                ),
                settleCard(
                    peopleList[1],
                    "$75.00",
                    "Yesterday 11/21/2022",
                    "Received",
                    "",
                    "settle"
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
        ),
        "",
        "",
        actionItem("add", "message", -1, "", "black", false)
    );
}
