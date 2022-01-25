function settleCard(
    who,
    amount,
    when = "",
    kind = "",
    index = 0,
    which = "",
    quantity = 1,
    where = "",
    actions = ["paypal", "venmo", "zelle"]
) {
    // debugger;
    return card(
        "settle",
        div(
            `titles settle ${kind}`,
            row(
                icon("settle") +
                col(cardTitle(`${titleCase(kind)} ${amount}`) + cardSubtitle(when))
            )
        ) + actionItem("open", "settle_list", index),
        [
            which, where
        ].map(text).join("")
        ,
        [{
            people: who,
            title: "split with",
            groupName: "participant",
            subtitle: `Covered ${quantity} item${quantity === 1 ? "" : "s"}`
        }],
        actions
    );
}
