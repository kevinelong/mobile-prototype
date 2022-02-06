function settleWho(settleRow) {
    const WHO_INDEX = 0;
    const AMOUNT_INDEX = 1
    const amount = settleRow[AMOUNT_INDEX];
    const color = ((amount > 0) ? "green" : ((amount < 0) ? "red" : "black"));

    const amountText = currency(amount);
    return div(`settle-who ${color}`,
        col(
            div("amount", amountText) +
            div("who", settleRow[WHO_INDEX])
        )
    )
}

function settleGroup(people) {
    return row(people.map(settleWho).join(""));
}

function settleCard(
    who,
    amount,
    when = "",
    kind = "",
    index = 0,
    which = "",
    quantity = 1,
    where = "",
    location = "",
    actions = ["Request Settlement"]
) {

    const titleContent = div(
        `titles settle ${kind}`,
        cardSubtitle(when) +
        row(
            icon(which) +
            col(
                cardTitle(`${titleCase(where)}`) +
                cardSubtitle(`${titleCase(location)}`)
            ) +
            actionItem("open", "settle_list", index)),
    );

    const color = ((amount > 0) ? "green" : ((amount < 0) ? "red" : "black"));
    const amountText = currency(amount);
    const cardContent = title(amountText, color) + settleGroup(who);

    return card(
        "settle",
        titleContent,
        cardContent, [],
        actions
    );
}

// function settleCard(
//     who,
//     amount,
//     when = "",
//     kind = "",
//     index = 0,
//     which = "",
//     quantity = 1,
//     where = "",
//     actions = ["split", "settle"]
// ) {
//     return card(
//         "settle",
//         div(
//             `titles settle ${kind}`,
//             row(
//                 icon("settle") +
//                 col(cardTitle(`${titleCase(kind)} ${amount}`) + cardSubtitle(when))
//             )
//         ) + actionItem("open", "settle_list", index),
//         [
//             which, where
//         ].map(text).join("")
//         ,
//         [{
//             people: who,
//             title: "split with",
//             groupName: "participant",
//             subtitle: `Covered ${quantity} item${quantity === 1 ? "" : "s"}`
//         }],
//         actions
//     );
// }