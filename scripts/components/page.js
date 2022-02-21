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
    tabs = ""
) {
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
            row(
                ((searchMessage !== undefined && searchMessage.length > 0) ? search([], -1, searchMessage) : "")
                + actionItem("add", name, -1, "add", "black", false, 0)
            )+
            // actionButton("Smart Ideas", "smart-ideas") +
                choiceSet(`${name}-filters`, choiceList, selectedChoice, name)
        ) +
        contentPanel(
            content +
            (tabs ? tabs : "") +
            actionContent
        ),
        `id='page-${name}'`
    );
}
