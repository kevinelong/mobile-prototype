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
    return div("card-tags", [...tags].map(hashTagGold).join(""));
}

function actionList(id, list = [], hideText = false, qty= 0, iconColor="") {
    return div(
        "action-list",
        [...list].reverse()
            .map((c) =>
                actionItem(
                    c,
                    c,
                    -1,
                    titleCase(c),
                    iconColor,
                    hideText,
                    qty)
            )
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
    content = "",
    groups = [],
    actions = [],
    image = "",
    tags = [],
    which = -1,
    attrs=""
) {
    return div(
        `card ${kind} ${which}`,
        img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(cardTitle(title) + contentPanel(content)) +
        (tags || groups || actions
            ? cardSection(
                cardTags(tags) +
                (groups || actions
                    ? cardQuadrant(
                        cardGroups(groups) +
                        actionList(`card-actions`, actions)
                    )
                    : "")
            )
            : "") +
        img(
            "background bottom",
            "images/backgrounds/bottom-gradient-black.svg"
        ),
        attrs +
        ` data-kind="${kind}" data-which="${which}" ` +
        (image ? `style="background-image: url('${image}');"` : "")
    );
}

function detail(
    kind,
    title,
    body = "",
    groups = [],
    actions = "",
    imagePath = "",
    tags = [],
    which = -1
) {
    return div(
        `detail ${kind} ${which}`,
        img("detail-image", imagePath) +
        cardSection(cardTitle(body)) +
        cardSection(
            cardTags(tags) +
            cardQuadrant(
                cardGroups(groups) +
                actionList(`card-actions`, actions)
            )
        )
    );
}
