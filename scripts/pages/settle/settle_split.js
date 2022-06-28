function dashBoardItem(titleText = "", valueText = "", actionText = "", actionName = "") {
    return col(
        col(
            title(valueText) +
            div("tiny-text", titleText)
        ) +
        actionItem(actionName, "settle", -1, actionText, "black", false),
        "", "dashboard-item");
}

function dashboard(items) {
    return row(items.join(""));
}

function settleDashboard(settleDayList) {
    return div("dashboard padded rack hidden",
        [
            dashBoardItem(
                "Total Owed to You",
                amount(0, "", "total-owed-to-me"),
                "Request All",
                "request-all"
            ),
            dashBoardItem(
                "Total You Owe",
                amount(0, "", "total-i-owe"),
                "Pay All",
                "pay-all"
            ),
        ].join("")
    );
}

function settleSplit(selected = false) {
    return page(
        selected,
        "settle_split",
        "Settle - Group Split: Ongoing<br>(RR; BF; JS)",
        [],
        "",
        row(
            actionItem("search") +
            // actionItem("add","expense",-1,"Add Expense") +
            actionButton("Add Expense", "add", "expense") +
            actionButton("History") +
            actionItem("chat")
            , "", "padded"
        ,"","nowrap") +
        actionButton("Settle All", "settle") +
        cardList(
            settleDashboard(SETTLE_GROUP_DATA) +
            SETTLE_GROUP_DATA.list.map(settleDayBlock).join("")
        ),
        "ALL NETWORK"
    );
}
