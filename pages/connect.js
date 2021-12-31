const connectCard = (title, subtitle = "") => card(
    div("titles",
        row(
            icon("people") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) +
    actionItem("open"),
    messagePanel([
        ["Are you ready for mimosas?", "KL"],
        ["Oh, so ready...", "GB"],
        ["Waffle bar is where I'm at!", "NM"],
    ]),
    ["KL", "GB", "NM"],
    ["share", "heart", "pin"],
    "images/cannon-beach.jpg"
);

const settleCard = (who, amount) => card(
    div("titles",
        row(
            icon("settle") +
            col(
                cardTitle("Settle") +
                cardSubtitle(who)
            )
        )
    ) + actionItem("open"),
    text(`You owe ${amount}`),
    [],
    ["settle"]
);

const exploreCard = (quantity) => card(
    div("titles",
        row(
            icon("explore") +
            col(
                cardTitle("Explore") +
                cardSubtitle(``)
            )
        )
    ) + actionItem("open"),
    text(`You have ${quantity} new items to Explore!`),
);

const boardCard = (who, quantity) => card(
    div("titles",
        row(
            icon("board") +
            col(
                cardTitle("Dream") +
                cardSubtitle(``)
            )
        )
    ) + actionItem("open"),
    text(`${who} added ${quantity} items to your board.`),
);

const planCard = (who, what) => card(
    div("titles",
        row(
            icon("plan") +
            col(
                cardTitle("Plan") +
                cardSubtitle(``)
            )
        )
    ) + actionItem("open"),
    text(`${who} invited you to ${what}.`),
    [],
    ["plan"]
);

const peoplePage = (selected = false) => page(
    selected,
    "connect",
    "Connect",
    [
        "All Messages",
        "Group Messages",
    ],
    "All Messages",
    cardList(
        exploreCard(11) +
        boardCard("Kevin", 2) +
        planCard("Greg", "Pinball Museum") +
        settleCard("Three Amigos", "$3.00") +
        connectCard("Sunday Brunch")
    ),
    "",
    "",
    actionItem("add")
);

// [
//     "ALL NETWORK",
//     "GROUPS",
//     "PLANNERS",
//     "FRIENDS",
//     "CONFIRMATIONS",
//     "NEW PEOPLE",
//     "MATCHES",
//     "DEALS"
// ],
