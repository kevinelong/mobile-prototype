
function smartCard(ve = VitaEvent()) {
    let qty = hasPeople(ve) ? ve.groups[0].people.length : 0;

    let booking = "";

    if (ve.booking_index >= 0) {
        booking = actionItem("book", "book", -1, "Book Now!");
    }

    let style = '';

    if (ve.imagePath) {
        style = imgStyle(rgbA([.7, 0, .7]), ve.imagePath, ve.period.color);
    } else {
        style = gradStyle(rgbA([.7, 0, .7]), ve.period.color);
    }
    return div(
        `card timeline smart ${ve.kind} ${ve.period.name} ${currentClass(ve)}`,
        div(
            "card-inner",
            cardSection(
                row(cardSubtitle(`${ve.period.name} ${ve.when} ${ve.duration}`)) +

                row(icon(ve.kind) + cardTitle(ve.titleText)) +
                cardTags(ve.tags) +
                row(
                    col(
                        row(col(cardGroups(ve.groups)) + booking) +
                        actionList(`card-actions`, ve.actions, false, qty)
                    )
                )
            ) +
            contentPanel(ve.subtitleText) +

            (ve.places.length > 0 ? text("Or you can check-in right here:") : "") +
            ve.places.map(place => actionItem("check-in", place, "", place)).join(""),
            style
        ),
        ` style="border-color:${ve.period.color}" tabindex="1" `
    );
}
