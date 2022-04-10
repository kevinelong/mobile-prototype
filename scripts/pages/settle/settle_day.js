function settleDayPage(selected = false) {
    return page(
        selected,
        "settle_day",
        "Itemization",
        ["DIVVY", "BY ITEM"],
        "DIVVY",
        simpleList(
            "Wilf's 12/31/2022",
            [
                [peopleList[BF].name, "French Fries", "6.00", "more"],
                [peopleList[RUBY].name, "Basic Burger", "6.00", "more"],
                [peopleList[BF].name, "Deluxe Cheeseburger", "9.00", "more"],
                [peopleList[JOE].name, "Veggie Burger", "9.00", "more"],
            ],
            "",
            "more"
        ),
        "",
        "settle"
    );
}
