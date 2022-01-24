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
    tags = []) {
    return div(
        `card ${kind}`,
        img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(
            contentPanel(body)
        ) +
        (tags || groups || actions
            ? cardSection(
                cardTags(tags) +
                (groups || actions
                    ? cardQuadrant(
                        cardGroups(groups) +
                        actionList(`card-actions`, actions)
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
    ) + cardTitle(title);
}

function exploreCard(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    id = 0
) {
    return exploreCardContent(
        "explore collapsed",
        div(
            "titles explore",
            row(
                 col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) ,
        row(icon("explore") +
        cardTitle(title) +
            actionItem("open", "explore_detail", id)
        ) +
        cardSubtitle(subtitle) +
        text(content),
        groups,
        actions,
        imagePath,
        tags,
        id
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
        tags
    );
}

function exploreCardNotification(quantity, groups=[]) {
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
