function connectPage(selected = false) {
    return page(
        selected,
        "connect",
        "Connect",
        ["All", "Personal", "Group", "Notifications"],
        "All",
        cardList(
            [
                connectCard(
                    [],
                    "I can join you on Saturday and Sunday",
                    "Thursday June 17th 10:23am",
                    "1",
                    [peopleList[BF]],
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=52%3A9886&scaling=min-zoom&page-id=1%3A995&starting-point-node-id=52%3A9817&show-proto-sidebar=0"
                ),

                connectCard(
                    [
                        ["I'm thinking about brunch on Sunday.", peopleList[0]],
                        ["Are you ready for mimosas?", peopleList[0]],
                        ["Oh, so ready...", peopleList[1]],
                        ["Waffle bar is where I'm at!", peopleList[2]],
                    ],
                    "Group Chat",
                    "The Three Amigos",
                    "",
                    [peopleList[0], peopleList[1]]
                ),

                exploreCardNotification(
                    11,
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=726%3A5745&scaling=min-zoom&page-id=1%3A995&starting-point-node-id=765%3A1510&show-proto-sidebar=0"
                ),

                exploreCard(
                    "",
                    "London July",
                    "Broadcast Response",
                    "Love this bar!",
                    [],
                    [peopleList[1]],
                    [],
                    "1",
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=164%3A610&starting-point-node-id=132%3A605&show-proto-sidebar=0"
                ),

                dreamCardNotification(peopleList[0], 2, "Santa Barbara"),

                planCard(
                    "Plan Invite",
                    "Yoichi's",
                    "Santa Barbara<br>" +
                        "Tuesday March 3rd 2022 at Noon.<br>" +
                        "Plan Invitation",
                    [peopleList[0]],
                    ["decline", "accept"],
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=768%3A4973&starting-point-node-id=724%3A3890&show-proto-sidebar=0"
                ),

                settleCard(
                    peopleList[BF],
                    "$23.00",
                    "Yesterday 12/12/2022",
                    "Pay",
                    "Santa Barbara",
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=188%3A2201&starting-point-node-id=188%3A1973&show-proto-sidebar=0"
                ),

                settleCard(
                    peopleList[0],
                    "$80.00",
                    "Yesterday 11/21/2022",
                    "Received",
                    "",
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=415%3A2024&starting-point-node-id=188%3A1973&show-proto-sidebar=0"
                ),
                settleCard(
                    peopleList[1],
                    "$75.00",
                    "Yesterday 11/21/2022",
                    "Received",
                    "",
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=415%3A2024&starting-point-node-id=188%3A1973&show-proto-sidebar=0"
                ),

                // boardCard2("Paris, France"),
                // boardCard2("Santa Barbara"),

                planCard(
                    "Check In and Rate",
                    "Brasil Arts Cafe",
                    "Check in and rate to earn Vita Rewards",
                    [],
                    [],
                    "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=890%3A4924&starting-point-node-id=890%3A4924&show-proto-sidebar=0"
                ),

                planCard(
                    "Verify",
                    "Yesterday's Transportation",
                    "Verify to earn Vita Rewards",
                    [],
                    [],
                    "http://www.vitaexplorer.com"
                ),
            ].join("")
        ),
        "",
        "",
        actionItem("add")
    );
}
