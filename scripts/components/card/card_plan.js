function planCard(title, subtitle, content, groups = [], actions = [], image = "") {
    return card(
        "plan",
        div(
            "titles plan",
            row(
                icon("plan") +
                    col(cardTitle(title) + cardSubtitle(`${subtitle}`))
            )
        ) + actionItem("open", "plan_detail"),
        content,
        groups,
        actions,
        image
    );
}
