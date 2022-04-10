function dashBoardItem(titleText = "", valueText = "", actionName = "") {
    return col(
        col(
            title(valueText) +
            div("tiny-text", titleText)
        ) +
        actionItem(actionName, "settle", -1, actionName, "black", false),
        "", "dashboard-item");
}

function dashboard(items) {
    return row(items.join(""));
}

function settleDayCard(settleRecord = {}) {
    return col(
        row(
            title(settleRecord.title)
        ) +
        div("row spread",
            text(settleRecord.message) +
            div("spread",
                text(settleRecord.amountPrefix) +
                amount(settleRecord.amount) +
                text(settleRecord.amountSuffix)
            ) +
            actionItem("open", "day", "", "Open Day", "black")
        ),
        "",
        "card"
    )
}

function settleDay(
    titleText = "5 Expenses - Sunday 11/11/2022",
    amount = 0,
    message = "You're Settled Up!",
    amountPrefix = "Ending Balance",
    amountSuffix = "Carried Forward") {
    return {
        title: titleText,
        amount: amount,
        message: message,
        amountPrefix: amountPrefix,
        amountSuffix: amountSuffix,
    }
}

function settleSplit(selected = false) {
    return page(
        selected,
        "settle_split",
        "Group Split: Ongoing<br>(RR; BF; JS)",
        [],
        "",
        row(
            actionItem("search") +
            actionItem("participants","","","Participants") +
            actionButton("History") +
            actionItem("chat")
            , "", "padded") +
        div("dashboard padded row",
            [
                dashBoardItem("Total Owed to You", "$0.00", "Request All"),
                dashBoardItem("Total You Owe", "$0.00", "Pay All"),
            ]
        ) +
        cardList(
            [
                settleDay(
                    "5 Expenses - Sunday 11/11/2022",
                    0,
                    "You're Settled Up!",
                    "",
                    "Ending Balance"
                ),
                settleDay(
                    "3 Expenses - Monday 12/06/2022",
                    125,
                    "Total Owed to Me",
                    "Carried Forward",
                    "Ending Balance",
                ),
                settleDay(
                    "2 Expenses - Sunday 12/12/2022",
                    300,
                    "Total Owed to Me",
                    "Carried Forward",
                    "Ending Balance",
                ),
            ].map(settleDayCard).join("")
        ),
        "ALL NETWORK"
    );
}


// cardList(
//     card(
//         "settle",
//         "Dinner at Wilf's",
//         "Tuesday 12/12/2022.",
//         cardSection("$36.33") +
//         moneyPanel([
//             ["Description", "Who", "Amount", "Balance"],
//             ["French Fries", peopleList[RUBY], "6.00", "0"],
//             ["Basic Burger", peopleList[RUBY], "6.00", "0"],
//             ["Deluxe Cheeseburger", peopleList[JOE], "9.00", "0"],
//             ["Veggie Burger", peopleList[JOE], "9.00", "0"],
//         ]),
//         [{
//             people: peopleList,
//             title: "Divvying",
//             groupName: "Co-Planner",
//             subtitle: "4 items"
//         }],
//         ["paypal", "venmo", "zelle"],
//         "images/photos/cannon-beach.jpg"
//     )
// ),