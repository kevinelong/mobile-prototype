function collectCardNotificationTitle(which) {
    return div(
        "titles collect",
        row(icon("collect") + col(cardTitle("Collect") + cardSubtitle(which)))
    ) + actionItem("open", "collect");
}

function collectCardNotification(
    groups,
    quantity,
    which,
    content = "",
    actions = []
) {
    return card(
        "collect",
        collectCardNotificationTitle(which),
        content,
        groups,
        actions,
        "",
        "",
        "",
        true, [
            { people: peopleList, title: "Linked With", groupName: "Curator", subtitle: "23 shared cards" },
            { people: peopleList, title: "Related Collections", groupName: "Person", subtitle: "13 Collections" },
        ]
    );
}