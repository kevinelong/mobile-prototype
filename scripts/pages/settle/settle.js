function settlePage(selected = false) {
    return page(
        selected,
        "settle",
        "Settle",
        ["All", "I Owe", "Owed to me"],
        "All",
        cardList(
            card(
                "settle",
                div(
                    `titles`,
                    cardTitle("Pay Betty Ford,") +
                        cardSubtitle(
                            " of Betty Ford, Joe Shmoe, Ruby Red <br> for yesterday, Tuesday 12/12/2022."
                        )
                ) + cardSection("$3.00"),
                moneyPanel([
                    ["Description", "Who", "Paid", "Amount", "Balance"],
                    ["Breakfast at Wally's", peopleList[RUBY],  "$99.99", "+66.00", "66.66"],
                    ["Lunch at Toro Toro", peopleList[JOE],"$99.99", "-33.33", "33.33"],
                    ["Dinner at Wilf's", peopleList[BF],"$105.99", "-36.33", "-3.00"],
                ]),
                [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                ["paypal", "venmo", "zelle"],
                "images/photos/cannon-beach.jpg"
            )
        ),
        "All"
    );
}
