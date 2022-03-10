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
    subtitle,
    body = "",
    groups = [],
    actions = "",
    image,
    tags = [],
    id = -1,
    kind2 = "",
    booking_index = -1,
    match_percent = 100
) {

    let qty = 0;
    if (groups && groups[0] && groups[0].people) {
        qty = groups[0].people.length;
    }
    // console.log("booking_index", booking_index)
    let booking = "";
    if (booking_index >= 0) {
        booking = actionItem("book", "book", -1, "Book Now!");
    }
    // const booking = "";
    return div(
        `card ${kind} ${kind2}`,
        // img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(
            cardTags(tags) +
            cardTitles("explore", title, subtitle,-1,-1,"explore_detail")
        ) +
        row(
            col(
                text(`${match_percent}% match`) +
                row(
                    col(cardGroups(groups)) +
                    booking
                ) +
                actionList(`card-actions`, actions, true, qty)
            )
        )
        // img(
        //     "background bottom",
        //     "images/backgrounds/bottom-gradient-black.svg"
        // )
        ,
        image ? `style="background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.25)), black url('${image}') center/cover no-repeat;"` : ""

        // image ? `style="background-image: url('${image}');"` : ""
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
    booking_index = -1,
    match_percent = 100
) {
    return exploreCardContent(
        "explore",
        title,
        subtitle,
        "",
        groups,
        actions,
        imagePath,
        tags,
        id,
        kind,
        booking_index,
        match_percent
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
        "Explore",
        `Santa Barbara, +12 more`,
        text(`${quantity} new cards from people you love!`),
        groups,
        ["explore"],
        "",
        [],
        -1,
        "",
        "",
        "explore_detail"
    );
}
