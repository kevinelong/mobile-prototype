const paymentsList = (selected = false) => page(selected,
    "payments_list",
    "Itemization",
    [
        "DIVVY",
        "BY ITEM",
    ],
    "DIVVY",
    simpleList("Wilf's 12/31/2022",[
                ["KL", "French Fries", "6.00", "more"],
                ["GB", "Basic Burger", "6.00", "more"],
                ["KL", "Deluxe Cheeseburger", "9.00", "more"],
                ["", "Veggie Burger", "9.00", "more"],
    ],"","more"),
    "",
    "payments"
);