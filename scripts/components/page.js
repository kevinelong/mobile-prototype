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
                cardPerson(peopleList[RUBY])
                // actionItem("person", "me", 0, "", "black")
        ) +
            contentPanel(
                choiceSet(`${name}-filters`, choiceList, selectedChoice) +
                    actionContent +
                    search([]) +
                    content
            ),
        `id='page-${name}'`
    );
}
