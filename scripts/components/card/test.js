function exploreCard(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id = ""
) {
    return card(
        "explore",
        div(
            "titles explore",
            row(
                icon("explore") + col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + actionItem("open", "explore_detail", id),
        text(content),
        people,
        actions,
        imagePath,
        tags
    );
}

function exploreDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id = ""
) {
    return detail(
        "explore",
        "Details",
        div(
            "titles explore",
            row(
                // icon("explore") +
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + text(content),
        people,
        actions,
        imagePath,
        tags
    );
}

function exploreCardNotification(quantity) {
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
                "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=765%3A1510&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=765%3A1510&show-proto-sidebar=0",
                "",
                ""
            ),
        text(`${quantity} new cards from people you love!`),
        [],
        ["explore"],
        ""
    );
}