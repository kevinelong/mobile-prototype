function dreamCardNotification(
    people,
    quantity,
    which,
    content = "",
    actions = []
) {
    return card(
        "dream",
        div(
            "titles dream",
            row(icon("dream") + col(cardTitle("Dream") + cardSubtitle(which)))
        ) + actionItem("open", "dream"),
        content,
        people,
        actions,
        "",
        "",
        "",
        true,
        "Added",
        "Co-Planner"
    );
}
