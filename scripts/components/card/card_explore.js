// function exploreCard(
//     imagePath = "images/photos/cannon-beach.jpg",
//     title = "",
//     subtitle = "",
//     content = "",
//     tags = [],
//     people = [],
//     actions = [],
//     id = ""
// ) {
//     return card(
//         "explore",
//         div(
//             "titles explore",
//             row(
//                 icon("explore") + col(cardTitle(title) + cardSubtitle(subtitle))
//             )
//         ) + actionItem("open", "explore_detail", id),
//         text(content),
//         people,
//         actions,
//         imagePath,
//         tags
//     );
// }

function exploreCardContent(
    kind,
    title,
    body = "",
    groups = [],
    actions = "",
    image = "",
    tags = [],
    booking_index = -1
) {

    let qty = 0;
    if (groups && groups[0] && groups[0].people) {
        qty = groups[0].people.length;
    }
    const booking = (booking_index < 0) ? "" : actionItem("book", "book", -1, "Book Now!");
    return div(
        `card ${kind}`,
        img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(
            contentPanel(body) +
            cardTags(tags)
        ) +
        (tags || groups || actions
            ? row(
                (groups || actions
                    ? col(
                        row(col(cardGroups(groups)) + booking) +
                        actionList(`card-actions`, actions, false, qty)
                    )
                    : "")
            )
            : "")
        +
        img(
            "background bottom",
            "images/backgrounds/bottom-gradient-black.svg"
        )
        ,
        image ? `style="background-image: url('${image}');"` : ""
    ) //+ cardTitle(title);
}

function exploreCard(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    id = 0,
    kind = "explore",
    booking_index = -1
) {
    return exploreCardContent(
        "explore",
        div(
            "titles explore",
            cardTitle(title) + cardSubtitle(subtitle)
        ),
        row(
            icon(kind) +
            cardTitle(title) +
            actionItem("open", "explore_detail", id, "")
        ) +
        cardSubtitle(subtitle),
        groups,
        actions,
        imagePath,
        tags,
        id,
        kind,
        booking_index
    );
}

function exploreDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    which = -1
) {
    return detail(
        "explore",
        "Details",
        div(
            `titles explore ${which}`,
            row(
                // icon("explore") +
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + text(content),
        groups,
        actions,
        imagePath,
        tags,
        which
    );
}

function exploreCardNotification(quantity, groups = []) {
    return card(
        "explore",
        div(
            "titles explore",
            row(
                icon("explore") +
                col(
                    cardTitle("Explore") +
                    cardSubtitle(`Santa Barbara, +12 more`)
                )
            )
        ) +
        actionItem(
            "open",
            "explore",
            "",
            ""
        ),
        text(`${quantity} new cards from people you love!`),
        groups,
        ["explore"],
        ""
    );
}
