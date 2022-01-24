function connectCardTitle(title, subtitle, which = "", id = 0) {
    return div(
        "titles",
        row(icon("people") + col(cardTitle(title) + cardSubtitle(subtitle)))
    ) + actionItem("open", which, id)
}

function connectCardContent(groups, messageList = []) {
    return [
        actionItem("add", "person", -1, "Add Person", "", false),
        messagePanel(messageList.slice(-3)),
    ].join("");
}

function connectCard(
    messageList = [],
    title = "",
    subtitle = "",
    id = 0,
    groups = [],
    which = "",
    showSuffix = false
) {
    const kind = (groups[0].people.length > 1 ? "group-chat" : "1-on-1");

    return card(
        "connect" + " " + kind,
        connectCardTitle(title, subtitle, which, id),
        connectCardContent(messageList),
        groups,
        [],
        "",
        [],
        0,
        ` data-kind="${kind}" `
    );
}

function connectPersonDetail(
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
        "connect",
        "Details",
        div(
            `titles explore ${which}`,
            row(
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + col(text(content) + text("Friends:") + cardGroups(groups)),
        groups,
        actions,
        imagePath,
        tags
    );
}
