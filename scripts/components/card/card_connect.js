function connectCard(
    messageList = [],
    title = "",
    subtitle = "",
    id = 0,
    people = [],
    which = "",
    showSuffix = false
) {
    return card(
        "connect"+ (people.length > 0 ? " group-chat" : ""),
        div(
            "titles",
            row(icon("people") + col(cardTitle(title) + cardSubtitle(subtitle)))
        ) + actionItem("open", which, id),
        row(actionItem("add") + cardPeople(people, showSuffix)) +
            messagePanel(messageList, "white")
    );
}

function connectPersonDetail(
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
        "connect",
        "Details",
        div(
            "titles explore",
            row(
                // icon("explore") +
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + col(text(content) + text("Friends:") + cardPeople(people)),
        [],
        [],
        imagePath,
        tags
    );
}
