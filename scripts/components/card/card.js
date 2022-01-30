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
    if (!tags || tags.length === 0) {
        return "";
    }
    return div("card-tags", [...tags].map(hashTagGold).join(""));
}

function actionList(id, list = [], hideText = false, qty = 0, iconColor = "") {
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
    attrs = ""
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
        ` data-kind="${cleanName(kind)}" data-which="${which}" ` +
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

function activityCard(item = {}, index = -1) {
    return card(
        "activity",
        item.title,
        item.description,
        item.people,
        [],
        item.image,
        item.tags,
        index,
        "recommended"
    );
}

function titleRow(name, icon, index) {
    console.log("titleRow", name, icon, index);
    return row(
        row(
            actionItem(icon, index, index) +
            title(name)
        ) +
        actionItem("show")
    )
}

function activityListItems(list, index) {
    console.log("activityListItems", list, index);
    if (!list) {
        return "";
    }
    return titleRow(list.name, list.icon, index) +
        cardList(list.items.map(activityCard).join(""));
}

function activityList(list) {
    if (!list) {
        return "";
    }
    return div("activity-list", list.map(activityListItems).join(""));
}