function timelineCard(ve = VitaEvent()) {
    let qty = 0;
    if (ve.groups && ve.groups[0] && ve.groups[0].people) {
        qty = ve.groups[0].people.length;
    }
    console.log("booking_index", ve.booking_index);

    let booking = "";

    if (ve.booking_index >= 0) {
        booking = actionItem("book", "book", -1, "Book Now!");
    }

    return div(
        `card timeline ${ve.kind} ${ve.period.name} ${currentClass(ve)}`,
        div(
            "card-inner",
            cardSection(
                contentPanel(
                    row(
                        cardSubtitle(`${ve.period.name} ${ve.when ? ve.when : ve.period.from}${ve.duration ? ' ' + ve.duration : '-' + ve.period.to}`) +
                        actionItem("plan", "", "", "Edit")
                    ) +
                    row(
                        icon(ve.kind) +
                        cardTitle(ve.titleText) +
                        actionItem("open", "explore_detail", ve.id, "")
                    ) +
                    cardSubtitle(ve.subtitleText),
                ) +
                cardTags(ve.tags) +
                div(
                    "memories",
                    col(
                        row(text("Memories:")) +
                        row(
                            row(
                                image("images/dish_1.png") +
                                image("images/dish_2.png") +
                                image("images/dish_3.png")
                            ) + actionItem("upload", "", "", "Upload", "", false)
                        )
                    )
                ) + col(
                    ve.content
                )
            ) +
            row(
                col(
                    row(col(cardGroups(ve.groups)) + booking) +
                    actionList(`card-actions`, ve.actions, false, qty)
                )
            ),
            cardStyle(ve)
        ),
        ` style="border-color:${ve.period.color}" tabindex="1" `
    );
}
