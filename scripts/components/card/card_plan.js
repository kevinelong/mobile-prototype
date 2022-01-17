function planCard(title, subtitle, content, people = [], actions = [], image = "") {
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
        people,
        actions,
        image
    );
}
