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
                    cardTitle("Pay Kevin,") +
                        cardSubtitle(
                            " of The Three Amigos<br>for yesterday, Tuesday 12/12/2022."
                        )
                ) + cardSection("$3.00"),
                moneyPanel([
                    ["Description", "Who Paid", "Amount", "Balance"],
                    ["Breakfast at Wally's", "GB $99.99", "+66.00", "66.66"],
                    ["Lunch at Toro Toro", "KL $99.99", "-33.33", "33.33"],
                    ["Dinner at Wilf's", "WH $105.99", "-36.33", "-3.00"],
                ]),
                ["Kevin Long", "Greg Bellowe", "Nina Marie"],
                ["paypal", "venmo", "zelle"],
                "images/cannon-beach.jpg"
            )
        ),
        "All"
    );
}
