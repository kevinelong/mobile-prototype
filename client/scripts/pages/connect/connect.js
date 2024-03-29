function connectPage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;

    const chatContent = cardList(
        [
            connectCard(
                {messages: [], members: []},
                "I can join you on Saturday and Sunday",
                "",
                0,
                [{
                    people: [peopleList[BF]],
                    title: "",
                    groupName: "Participant",
                    subtitle: ""
                }],
                "Thursday June 17th 10:23am"
            ),
        ].join("")
    );

    const groupContent = cardList(
        [
            connectCard(
                messageListExample,
                "would you both like to join me to visit Santa Barbara this weekend? I was thinking of going wine tasting and seeing Hozier concert at the Santa Barbara bowl.",
                peopleList.map(p => p.name).join(", "),
                0, [{
                    people: peopleList,
                    title: "Connecting with",
                    groupName: "Participant",
                    subtitle: "in group conversation."
                }],
                "Thursday June 17th 10:23am",
                "GROUP-CHAT"
            ),
        ].join("")
    );
    const notificationsContent = cardList(
        [
            card(
                "settle",
                "Pay",
                "End of Day Settlement – Net All Items<br>Yesterday, Tuesday 12/12/2022 12:01 pm",
                `
                <div class="row spread div">
                    <div class="nowrap center div">
                        <div class="amount   div">
                            $0
                        </div>
                        Owed to You
                    </div>
                    <div class="action-item settle settle gold  div" onclick="actionClick(event, this, 'settle','settle','-1')" alt="settle">
                    <div class="icon-frame gold div"><img class="icon" src="images/icons/icon-settle-gold.svg"></div>
                    <div class="text wc-1 gold div">Settle</div>
                    </div>
                    <div class="nowrap center div">
                        <div class="amount   div">
                            $267
                        </div>
                        You Owe
                    </div>
                </div>
                `,
                // title("You Owe $267") + button("Pay $267"),
                [
                    {
                        people: three_people,
                        title: "Split with",
                        groupName: "participants",
                        subtitle: "",
                    },
                ],
                ["Split Settings", "Review Day"].reverse(),
                "",
                [],
                "settle_list",
                "",
                "",
                "settle_list"
            ),
            exploreCardNotification(
                13, [{
                    people: peopleList,
                    title: "Liked By",
                    groupName: "Explorer",
                    subtitle: "including 2 taste matches!"
                }]
            ),
            collectCardNotification(
                [{
                    people: [peopleList[1]],
                    title: "linked with",
                    groupName: "currator",
                    subtitle: "23 shared cards"
                }],
                2,
                defaultLocation,
                text(
                    `${itemCount} new items added to your linked ${defaultLocation} collect board by your friend ${peopleList[BF].name
                    }.`
                ), ["collect"]
            ),
            collectCardNotification(
                [],
                2,
                "Santa Barbara",
                "New taste match!", ["match"]
            ),
            planCard(
                "Plan Invite",
                "Yoichi's",
                "Santa Barbara<br>" +
                "Tuesday March 3rd 2022 at Noon.<br>" +
                "Plan Invitation", [{
                    people: [peopleList[0], peopleList[1]],
                    title: "Going",
                    groupName: "Co-Planner",
                    subtitle: ""
                }], ["decline", "counter", "accept"]
            ),
            planCard(
                "Check In and Rate",
                "Brasil Arts Cafe",
                "Check in and rate to earn Vita Rewards", [], ["rate", "review", "check-in"]
            ),
            planCard(
                "Verify",
                "Yesterday's Transportation",
                "Verify to earn Vita Rewards", [], ["verify"]
            ),

        ].join("")
    );

    const preTabs = actionItem("search", "", -1, "search", "black", true);
    const postTabs = actionItem("sort", "", -1, "sort", "black", true);

    const messagesContent = tabSet("conversations", [
        {name: "1 on 1", content: chatContent},
        {name: "Group Chat", content: groupContent},
    ], "1 on 1", preTabs, postTabs);

    let contactsContent = button("Add Contact") +
        cardList(
            [
                cardContact(peopleList[BF],["Friend",  "Phone"]),
                cardContact(peopleList[JOE],["Friend",  "Facebook", "Instagram"]),
                cardContact(peopleList[RUBY],["Expert"]),
            ].join("")
        );

    let groupsContent = button("New Group") +
        cardList(
            [
                cardGroup(peopleList),
            ].join("")
        );


    const peopleContent = tabSet("people", [
        {name: "Groups", content: groupsContent},
        {name: "Contacts", content: contactsContent},
    ], "Groups", preTabs, postTabs);


    return page(
        selected,
        "connect",
        "Connect",
        ["Conversations", "Notifications", "People"],
        "Conversations",
        "",
        "",
        "",
        actionItem("open", "connect_chat", -1, "", "black", true, 0),
        "",
        messagesContent + peopleContent + notificationsContent,
        false,
        "",
        "",
        actionItem("chat", "message", -1, "", "black", true, 0),
    );
}


// const timelineContent = [
//     choiceSet(
//         "timeline", [
//             "Go!",
//             "Check-Ins",
//             "Pay/Settle",
//             "Rate/Review",
//             "Verify for Offset",
//             "Memories"
//         ],
//         "Go!"
//     ),
//     cardList([
//         cardListSection(
//             "Friday 12/12/2022",
//             actionItem("add-place", "timeline", -1, "add", "black"),
//             "Santa Barbara",
//             getPeriods().map(timelineCard)
//         ),
//         cardListSection(
//             "Saturday 12/13/2022",
//             actionItem("add-place", "timeline", -1, "add", "black"),
//             "Santa Barbara",
//             getPeriods().map(timelineCard)
//         ),
//         cardListSection(
//             "Sunday 12/14/2022",
//             actionItem("add-place", "timeline", -1, "add", "black"),
//             "Santa Barbara",
//             getPeriods().map(timelineCard)
//         ),
//     ].join("")),
// ].join("");

/* settleCard(
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
            ),*/