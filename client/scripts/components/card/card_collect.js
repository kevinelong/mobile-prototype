
function collectCardNotification(
    groups,
    quantity,
    which,
    content = "",
    actions = []
) {
    return card(
        "collect",
        which,
        "",
        content,
        groups,
        actions,
        "",
        "",
        "",
        true, [
            { people: peopleList, title: "Linked With", groupName: "Curator", subtitle: "23 shared cards" },
            { people: peopleList, title: "Related Collections", groupName: "Person", subtitle: "13 Collections" },
        ],
        "collect_board"
    );
}