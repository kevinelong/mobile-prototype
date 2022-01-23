function simpleItem(data, actionName = "more") {
    return div(
        "simple-item",
        (data[0] ? circle(subtitle(data[0])) : circle(icon("who"))) +
            div(
                "title-block",
                title(data[1] + " " + data[2])
                // subtitle(data[2])
            ) +
            actionItem(actionName),
        action(actionName)
    );
}

function simpleList(
    titleText,
    itemData = [["", ""]],
    subtitleText = "",
    actionName = "right"
) {
    return (
        div(
            `title-block`,
            (titleText ? title(titleText) : "") +
                (subtitleText ? subtitle(subtitleText) : "")
        ) +
        div(
            "simple-list",
            [...itemData].map((item) => simpleItem(item, actionName)).join("")
        )
    );
}

function rowPerson(data, actionName = "right") {
    return div(
        "simple-item",
            person(data) +
            title(data.name) +
            icon(actionName),
            action(actionName, data.name, data.id)
    );
}

function listPeople(
    titleText,
    itemData,
    subtitleText = "",
    actionName = "right"
) {
    return (
        div(
            `title-block`,
            (titleText ? title(titleText) : "") +
            (subtitleText ? subtitle(subtitleText) : "")
        ) +
        div(
            "simple-list",
            [...itemData].map((item) => rowPerson(item, actionName)).join("")
        )
    );
}
