function dashBoardItem(titleText = "", valueText = "", actionText = "", actionName = "") {
    return col(
        col(
            title(valueText) +
            div("tiny-text", titleText)
        ,"","centered")
        // +
        // actionItem(actionName, "settle", -1, actionText, "black", false),
        // "", "dashboard-item"
    );
}

function dashboard(items) {
    return row(items.join(""));
}

function settleDashboard(settleDayList) {
    return div("dashboard padded rack framed rounded nowrap",
        [
            dashBoardItem(
                "Total Owed to You",
                amount(0, "", "total-owed-to-me"),
                "Request All",
                "request-all"
            ),
            actionButton("Settle All Days", "settle"),
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
        row("Settle - Group Split: Ongoing<br>(RR; BF; JS)" +
        actionItem("edit"),"","nowrap"),
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
        cardList(
            settleDashboard(SETTLE_GROUP_DATA) +
            SETTLE_GROUP_DATA.list.map(settleDayBlock).join("")
        ),
        "ALL NETWORK"
    );
}
