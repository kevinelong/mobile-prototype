function cardText(content) {
    return div("card-text", content);
}

function cardSection(content) {
    return div("card-section", content);
}

function cardQuadrant(content) {
    return div("card-quadrant", content);
}

function cardTitle(content) {
    return div("card-title", content);
}

function cardTitleText(content) {
    return div("card-title-text", content);
}

function cardSubtitle(content) {
    return content ? div("card-subtitle", content) : "";
}

function cardTitles(kind, title, subtitle = "", which = "", id = 0) {
    return (
        div(
            "titles",
            row(icon(kind) + col(cardTitle(title) + cardSubtitle(subtitle)))
        ) + actionItem("open", which, id)
    );
}

function cardPhoto(c) {
    return div("card-photo", c);
}

function cardTags(tags) {
    return div("card-tags", [...tags].map((p) => hashTag(p)).join(""));
}

function cardActions(id, actionList = []) {
    return div(
        "action-list",
        [...actionList]
            .map((c) => actionItem(c, actionList.length == 1, "", c))
            .join(""),
        `id="${id}" class='action-list'`
    );
}

function cardList(content) {
    return div("card-list", content);
}

function card(
    kind,
    title,
    body = "",
    people = [],
    actions = "",
    image = "",
    tags = [],
    showSuffix = false
) {
    return div(
        `card ${kind}`,
        img("background top", "images/backgrounds/top-gradient-black.svg") +
            cardSection(cardTitle(title)) +
            contentPanel(body) +
            (tags || people || actions
                ? cardSection(
                      cardTags(tags) +
                          (people || actions
                              ? cardQuadrant(
                                    cardPeople(people, showSuffix) +
                                        cardActions(`card-actions`, actions)
                                )
                              : "")
                  )
                : "") +
            img(
                "background bottom",
                "images/backgrounds/bottom-gradient-black.svg"
            ),
        image ? `style="background-image: url('${image}');"` : ""
    );
}

function detail(
    kind,
    title,
    body = "",
    people = "",
    actions = "",
    imagePath = "",
    tags = []
) {
    return div(
        `detail ${kind}`,
        img("detail-image", imagePath) +
            cardSection(cardTitle(body)) +
            // contentPanel(body) +
            cardSection(
                cardTags(tags) +
                    cardQuadrant(
                        cardPeople(people) +
                            cardActions(`card-actions`, actions)
                    )
            )
        //, imagePath ? `style="background-image: url('${imagePath}');"` : ""
    );
}
