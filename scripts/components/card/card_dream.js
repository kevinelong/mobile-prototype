function dreamCardNotificationTitle(which){
    return div(
        "titles dream",
        row(icon("dream") + col(cardTitle("Dream") + cardSubtitle(which)))
    ) + actionItem("open", "dream");
}
function dreamCardNotification(
    groups,
    quantity,
    which,
    content = "",
    actions = []
) {
    return card(
        "dream",
        dreamCardNotificationTitle(which),
        content,
        groups,
        actions,
        "",
        "",
        "",
        true,
        [{ people:peopleList, title: "Linked With", groupName: "Dreamer", subtitle: "23 shared cards"}]
    );
}
