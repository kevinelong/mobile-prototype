function settleCard(who, amount, when = "", kind="", index=0, which="", quantity = 1) {
    return card(
        "settle",
        div(
            `titles settle ${kind}`,
            row(
                icon("settle") +
                    col(cardTitle(`Pay ${amount}`) + cardSubtitle(who.name))
            )
        ) + actionItem("open", "settle_list", index),
        text(when) + text("All Activities - Daily Net"),
        [{ people:peopleList, title: "split with", groupName: "participant", subtitle: `Covered ${quantity} item${quantity === 1 ? "" : "s"}` + (quantity === 1 ? "" : "s")}],
        ["settle"]
    );
}
