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
        div("system-bar", div("system-time", "00:00am")) +
        div("header",
            title(
                actionItem(parent ? "back" : "menu") +
                col(
                    div("title-middle", icon(name + "-black", "", caption)) +
                    div("subtitle-middle",
                        span("current", "11:04 am - Santa Barbara") +
                        actionItem("edit", "location", "Santa Barbara", "edit", "black", true, 0, true)
                    )
                ) +
                actionItem("map-off") +
                cardPerson(peopleList[RUBY])
                // actionItem("person", "me", 0, "", "black")
            ) +
            ((searchMessage !== undefined && searchMessage.length > 0) ? search([], -1, searchMessage) : "") +
            choiceSet(`${name}-filters`, choiceList, selectedChoice)
        ) +
        contentPanel(
            content +
            (tabs ? tabs : "") +
            actionContent
        ),
        `id='page-${name}'`
    );
}
