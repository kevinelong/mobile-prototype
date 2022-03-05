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
    preSearchContent = ""
) {
    const filters = choiceSet(`${name}-filters`, choiceList, selectedChoice, name);
    return div(
        `${name} page ${selected ? "" : "hidden"}`,
        // div("system-bar", div("system-time", "11:35 am")) +
        div("header",
            title(
                actionItem(parent ? "back" : "menu") +
                col(
                    div("title-middle", icon(name + "-black", "", caption))
                ) +
                actionItem("map-off") +
                cardPerson(peopleList[RUBY])
                // actionItem("person", "me", 0, "", "black")
            ) +
            (pushSecondaryNavChoicesAboveSearchFilter ? filters : "") +
            row(
                ((searchMessage !== undefined && searchMessage.length > 0) ? preSearchContent + search([], -1, searchMessage) : "")
                + actionItem("add", name, -1, "add", "black", false, 0)
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
