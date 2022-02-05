

function dashBoardItem(titleText = "", valueText = "", actionName = "") {
    return contentPanel(col([
        title(valueText),
        text(titleText),
        actionItem(actionName, "settle", -1, actionName, "", false),
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
        cardList([
            settleCard(
                [
                    ["RR", 0],
                    ["BF", 200],
                    ["JS", 0],
                ],
                "3.00",
                "9:33am yesterday, Tuesday 12/12/2022",
                "pay",
                -1,
                "dining",
                13,
                "The Boathouse Beach Cafe",
                "Santabarbara, California USA"
            ),settleCard(
                [
                    ["RR", 0],
                    ["BF", 200],
                    ["JS", 0],
                ],
                "3.00",
                "9:33am yesterday, Tuesday 12/12/2022",
                "pay",
                -1,
                "dining",
                13,
                "The Boathouse Beach Cafe",
                "Santabarbara, California USA"
            ),settleCard(
                [
                    ["RR", 0],
                    ["BF", 200],
                    ["JS", 0],
                ],
                "3.00",
                "9:33am yesterday, Tuesday 12/12/2022",
                "pay",
                -1,
                "dining",
                13,
                "The Boathouse Beach Cafe",
                "Santabarbara, California USA"
            ),
            ].join(""))
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