function connectCardTitle(title, subtitle, which = "", id = 0) {
    return div(
        "titles",
        row(icon("people") + col(cardTitle(title) + cardSubtitle(subtitle)))
    ) + actionItem("open", which, id)
}

function connectCardContent(groups, messageList = []) {
    return [
        messagePanel(messageList.slice(-3)),
        // actionItem("add", "person", -1, "Add Person", "", false),
    ].join("");
}

function connectCard(
    messageList = [],
    title = "",
    subtitle = "",
    id = 0,
    groups = [],
    which = "") {
    const kind = (groups[0].people.length > 1 ? "GROUP-CHAT" : "1-ON-1");

    let period = Period("");
    period.color = "#663399";
    return card(
        "connect" + " " + kind,
        connectCardTitle(title, subtitle, which, id),
        connectCardContent(messageList),
        groups,
        ["add-participant"],
        "",
        [],
        0,
        ` data-kind="${cleanName(kind)}" `,
        period
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
