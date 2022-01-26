function settleCardZZZ(
    title,
    subtitle = "",
    content = "",
    transactionList,
    people,
    actions
) {
    return card(
        "settle",
        div(`titles`, cardTitle(title) + cardSubtitle(subtitle)) + content,
        moneyPanel(transactionList),
        people,
        actions
    );
}

function dashBoardItem(titleText = "", valueText = "", actionName = "") {
    return contentPanel(col([
            title(valueText),
            text(titleText),
            actionItem(actionName,"settle",-1, actionName,"", false),
        ].join("")), "dashboard-item");
}

function dashboard(items) {
    return row(items.join(""));
}

function settlePage(selected = false) {
    return page(
        selected,
        "settle",
        "Settle",
        ["All", "I Owe", "Owed to me"],
        "All",

        dashboard([
            dashBoardItem("total owed to me", "$123.45", "remind-all"),
            dashBoardItem("total I owe", "$543.21", "settle-all"),
        ]) +
            cardList(
                settleCard(
                    [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                    "3.00",
                    "yesterday, Tuesday 12/12/2022",
                    "pay",
                    -1,
                    "NET - All Items",
                    13,
                    "Santa Barbara",
                    ["paypal", "venmo", "zelle"]
                )
            )
    );
}
/*

                    [
                        ["Description", "Who", "Paid", "Amount", "Balance"],
                        [
                            "Breakfast at Wally's",
                            peopleList[RUBY],
                            "$99.99",
                            "+66.00",
                            "66.66",
                        ],
                        [
                            "Lunch at Toro Toro",
                            peopleList[JOE],
                            "$99.99",
                            "-33.33",
                            "33.33",
                        ],
                        [
                            "Dinner at Wilf's",
                            peopleList[BF],
                            "$105.99",
                            "-36.33",
                            "-3.00",
                        ],
                    ],
 */