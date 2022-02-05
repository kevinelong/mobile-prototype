function currency(number){
    return number.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}
function settleWho(settleRow){
    const WHO_INDEX = 0;
    const AMOUNT_INDEX = 1
    const color = settleRow[AMOUNT_INDEX] > 0 ? "green" : "red";
    const amount = currency(settleRow[AMOUNT_INDEX]);
    return div(`settle-who ${color}`, 
        col(
                div("amount", amount) +
                div("who", settleRow[WHO_INDEX])
        )
    )
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
            )
        + actionItem("open", "settle_list", index)),
    );
    
    const cardContent =  title(amount, amount > 0 ? "green" : "red") +
    row(who.map(settleWho).join(""));

    return card(
        "settle",
        titleContent,
        cardContent,
        [],
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
