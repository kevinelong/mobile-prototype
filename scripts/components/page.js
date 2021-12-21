const page = (
    selected = false,
    name,
    caption = "",
    choiceList = [],
    selectedChoice = "",
    content = "",
    selectedCard = ""
) =>
    div(
        `${name} page ${ selected ? "" : "hidden"}`,
        title(
                icon("menu") +
                    div("title-middle",
                div("title-text", caption) +
                circle(icon("search"))
            ) + icon("account-circle")) +
        choiceSet("${name}-filters", choiceList, selectedChoice) +
        content, `id='page-${name}'`);
