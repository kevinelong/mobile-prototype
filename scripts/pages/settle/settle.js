function settleCard(
    title,
    subtitle = "",
    content = "",
    transactionList,
    people,
    actions
) {
    return card(
        "settle",
        div(
            `titles`,
            cardTitle(title) +
            cardSubtitle(
                subtitle
            )
        ) +
        content,
        moneyPanel(transactionList),
        people,
        actions
    );
}

function dashBoardItem(titleText = "", valueText = "", actionName = "") {
    return contentPanel(col([
            title(titleText),
            text(valueText),
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
            dashBoardItem("total debt", "$123.45", "remind-all"),
            dashBoardItem("total credit", "$543.21", "settle-all"),
        ]) +
        cardList(
            settleCard(
                "Pay Betty Ford,",
                " of Betty Ford, Joe Shmoe, Ruby Red <br> for yesterday, Tuesday 12/12/2022.",
                cardSection("$3.00"),
                [
                    ["Description", "Who", "Paid", "Amount", "Balance"],
                    ["Breakfast at Wally's", peopleList[RUBY], "$99.99", "+66.00", "66.66"],
                    ["Lunch at Toro Toro", peopleList[JOE], "$99.99", "-33.33", "33.33"],
                    ["Dinner at Wilf's", peopleList[BF], "$105.99", "-36.33", "-3.00"],
                ],
                [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                ["paypal", "venmo", "zelle"]
            )
        )
    );
}
