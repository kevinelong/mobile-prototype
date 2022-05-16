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



function settleDashboard(){
    return div("dashboard padded rack",
        [
            dashBoardItem("Total Owed to You", "$0.00", "Request All"),
            dashBoardItem("Total You Owe", "$0.00", "Pay All"),
        ].join("")
    )
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
            actionItem("participants","","","Participants") +
            actionButton("History") +
            actionItem("chat")
            , "", "padded"
        ) +
        cardList(
            settleDashboard() +
            SETTLE_GROUP_DATA.map(settleDayBlock).join("")
        ),
        "ALL NETWORK"
    );
}
