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
    headerAction = "",
    addAction = actionItem("add", name, -1, "Add", "black", false, 0)
) {
    headerAction = headerAction ? headerAction : addAction;
    const filters = choiceSet(`${name}-filters`, choiceList, selectedChoice, name,
        "",
        addAction
    );

    let searchContent = "";
    if(preSearchContent || searchMessage){
        searchContent = row(
            preSearchContent +
            ((searchMessage !== undefined && searchMessage.length > 0) ? search([], -1, searchMessage) : "")
            + headerAction
        )
    }

    return div(
        `${name} page ${selected ? "" : "hidden"}`,
        div("header",
            title(
                actionItem(parent ? "back" : "person",0,0,"","black") +
                col(
                    div("title-middle", icon(name + "-black", "", caption))
                ) +
                div("title-spacer","", "style=\"width:30px;height:30px;\"")
                // actionItem("map-off") +
                // cardPerson(peopleList[RUBY])
            ) +
            (pushSecondaryNavChoicesAboveSearchFilter ? filters : "") +
            searchContent +
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
