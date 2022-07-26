function planCard(title, subtitle, content, groups = [], actions = [], image = "") {
    return card(
        "plan",
        title,
        subtitle,
        content,
        groups,
        actions,
        image,
        [],
        "",
        "",
        "",
        "plan_detail"
    );
}
