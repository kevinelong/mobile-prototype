function settleSplit(selected = false) {
    return page(
        selected,
        "settle_split",
        "Split",
        ["DIVVY", "BY ITEM"],
        "ALL",
        cardList(
            card(
                "settle",
                div(
                    `titles`,
                    cardTitle("Dinner at Wilf's") +
                        cardSubtitle("Tuesday 12/12/2022.")
                ) + cardSection("$36.33"),
                moneyPanel([
                    ["Description", "Who Paid", "Amount", "Balance"],
                    ["French Fries", "?", "6.00", "0"],
                    ["Basic Burger", "?", "6.00", "0"],
                    ["Deluxe Cheeseburger", "?", "9.00", "0"],
                    ["Veggie Burger", "?", "9.00", "0"],
                ]),
                [{ people:peopleList, title: "Divvying", groupName: "Co-Planner", subtitle: "4 items"}],
                ["paypal", "venmo", "zelle"],
                "images/photos/cannon-beach.jpg"
            )
        ),
        "ALL NETWORK"
    );
}
