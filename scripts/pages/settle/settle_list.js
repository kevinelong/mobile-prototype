function settleList(selected = false) {
    return page(
        selected,
        "settle_list",
        "Itemization",
        ["DIVVY", "BY ITEM"],
        "DIVVY",
        simpleList(
            "Wilf's 12/31/2022",
            [
                [peopleList[BF], "French Fries", "6.00", "more"],
                [peopleList[RUBY], "Basic Burger", "6.00", "more"],
                [peopleList[BF], "Deluxe Cheeseburger", "9.00", "more"],
                [peopleList[JOE], "Veggie Burger", "9.00", "more"],
            ],
            "",
            "more"
        ),
        "",
        "settle"
    );
}
