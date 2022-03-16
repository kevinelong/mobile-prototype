function connectCardTitle(title, subtitleText, which = "", id = 0) {
    return div(
        "titles",
        row(icon("people") + col(cardTitle(title) + cardSubtitle(subtitleText)))
    ) + actionItem("open", which, id)
}

function connectCardContent(groups, messageList = {messages:[],members:[]}) {
    return [
        messagePanel(messageList.messages.slice(-3)),
        // actionItem("add", "person", -1, "Add Person", "", false),
    ].join("");
}

function connectCard(
    messageList = {messages:[],members:[]},
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
        title,
        subtitle,
        connectCardContent(messageList),
        groups,
        ["Participants"],
        "",
        [],
        0,
        ` data-kind="${cleanName(kind)}" `,
        period,
        "connect_chat",
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
