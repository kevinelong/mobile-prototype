function page(
    selected = false,
    name,
    caption = "",
    choiceList = [],
    selectedChoice = "",
    content = "",
    selectedCard = "",
    parent = "",
    actionContent = ""
) {
    return div(
        `${name} page ${selected ? "" : "hidden"}`,
        title(
            actionItem(parent ? "back" : "menu") +
                div("title-middle", icon(name + "-black", "", caption)) +
                actionItem("person", "", "", "", "black")
        ) +
            contentPanel(
                choiceSet(`${name}-filters`, choiceList, selectedChoice) +
                    search([]) +
                    content
            ) +
            actionContent,
        `id='page-${name}'`
    );
}
