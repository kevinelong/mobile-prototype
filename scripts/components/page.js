function page(
    selected = false,
    name,
    caption = "",
    choiceList = [],
    selectedChoice = "",
    content = "",
    selectedCard = "",
    parent = "",
    actionContent = "",
    searchMessage = "",
    tabs = "",
    pushSecondaryNavChoicesAboveSearchFilter = false,
    preSearchContent = "",
    headerAction = ""
) {
    const addAction= actionItem("add", name, -1, "Add", "black", false, 0);
    headerAction = headerAction ? headerAction : addAction;
    const filters = choiceSet(`${name}-filters`, choiceList, selectedChoice, name);
    return div(
        `${name} page ${selected ? "" : "hidden"}`,
        div("header",
            title(
                actionItem(parent ? "back" : "menu") +
                col(
                    div("title-middle", icon(name + "-black", "", caption))
                ) +
                actionItem("map-off") +
                cardPerson(peopleList[RUBY])
            ) +
            (pushSecondaryNavChoicesAboveSearchFilter ? filters : "") +
            row(
                preSearchContent +
                ((searchMessage !== undefined && searchMessage.length > 0) ? search([], -1, searchMessage) : "")
                + headerAction
            ) +
            (!pushSecondaryNavChoicesAboveSearchFilter ? filters : "")
        ) +
        contentPanel(
            content +
            (tabs ? tabs : "") +
            actionContent
        ),
        `id='page-${name}'`
    );
}
