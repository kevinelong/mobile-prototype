function settleCard(who, amount, when = "", kind="", id = "") {
    return card(
        "settle",
        div(
            `titles settle ${kind}`,
            row(
                icon("settle") +
                    col(cardTitle(`Pay ${amount}`) + cardSubtitle(who.name))
            )
        ) + actionItem("open", "settle_list", id),
        text(when) + text("All Activities - Daily Net"),
        [],
        ["settle"]
    );
}
