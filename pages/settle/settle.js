const settlePage = (selected=false) => page(selected,
    "settle",
    "Settle",
    [
        "ALL",
        "I OWE",
        "OWED TO ME",
    ],
    "ALL",
    cardList(
        card("settle",
            div(`titles`,
                cardTitle("You owe WH") +
                cardSubtitle(" of The Three Amigos<br>for yesterday, Tuesday 12/12/2022.")
            ) +
            cardSection("$3.00"),
            moneyPanel([
                ["Description", "Who Paid",  "Amount", "Balance"],
                ["Breakfast at Wally's", "GB $99.99",  "+66.00", "66.66"],
                ["Lunch at Toro Toro", "KL $99.99",  "-33.33", "33.33"],
                ["Dinner at Wilf's", "WH $105.99", "-36.33", "-3.00"],
            ]),
            ["Kevin Long", "Greg Bellowe", "Nina Marie"],
            ["paypal", "venmo", "zelle"],
            "images/cannon-beach.jpg"
        )
    ),
    "ALL NETWORK"
);