function settleCard(who, amount, when = "", id = "") {
    return card(
        "settle",
        div(
            "titles settle",
            row(
                icon("settle") +
                    col(cardTitle(`Pay ${amount}`) + cardSubtitle(who.name))
            )
        ) + actionItem("open", "settle_list", id),
        text(when) + text("All Activities - Net"),
        [],
        ["settle"]
    );
}
