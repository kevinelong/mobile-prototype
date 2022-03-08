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
    return div("card-tags", [...tags].map(hashTag).join(""));
}

function actionList(id, list = [], hideText = false, qty = 0, iconColor = "") {
    return div(
        `action-list ${id}`,
        [...list].reverse()
            .map((c) =>
                actionItem(
                    c,
                    id,
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

function cardList(content, collapse = false) {
    return div("card-list" + (collapse ? " collapse" : ""), content);
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
    attrs = "",
    period = Period()
) {

    const ve = VitaEvent(period, kind);
    ve.imagePath = image;

    return div(
        `card ${kind} ${which}`,

        cardSection(
            cardTags(tags) +
            cardTitle(title) +
            contentPanel(content)
        ) +
        (groups || actions ? cardSection(
            (groups || actions ? cardQuadrant(
                cardGroups(groups) +
                actionList(`card-actions`, actions)
            ) : "")
        ) : ""),

        attrs +
        ` data-kind="${cleanName(kind)}" data-which="${which}" ` +
        cardStyle(ve)
    );
}

function mapCard(
    kind,
    match_percent,
    content = "",
    groups = [],
    actions = [],
    image = "",
    tags = [],
    which = -1,
    attrs = "",
    period = Period()
) {

    const ve = VitaEvent(period, kind);
    ve.imagePath = image;

    return div(
        `card ${kind} ${which}`,
        title(
            icon(kind) +
            cardTags(tags) +
            actionItem("open", "explore_detail", -1, "", "", true)
        ) +
        row(
            content
        ) +
        row(
            cardSummary(groups)
        ) +
        div("preview-actions",
            // div("match_percent", match_percent + "% match") +
            actionItem("alternatives", "preview", -1, "Alternatives", "", false, 0, true) +
            actionItem("Share", "add", -1, "Share", "", true, 0, true) +
            actionItem("Message", "add", -1, "Invite", "", true, 0, true) +
            // actionItem("Connect", "add", -1, "Connect", "",true,0,true) +
            actionItem("map-on-white", "map-on", -1, "Directions", "", true, 0, true) +
            actionItem("book", "book", -1, "Book Now!", "", false, 0, true)
        ),
        attrs +
        ` data-kind="${cleanName(kind)}" data-which="${which}" ` +
        cardStyle(ve)
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
        cardTags(tags) +
        cardSection(cardTitle(body)) +
        cardSection(

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
        item.subtitle + "<br>" + item.content,
        item.groups,
        [],
        item.imagePath,
        item.tags,
        index,
        "recommended",
        [],
    );
}

function mapActivityCard(item = {}, index = -1) {
    return mapCard(
        item.kind,
        item.match_percent,
        [
            item.title,
            item.subtitle,
            item.content
        ].join("-"),
        item.groups,
        [],
        item.imagePath,
        item.tags,
        index,
        "recommended"
    );
}

function titleRow(name, icon, index, collapse = true) {
    // console.log("titleRow", name, icon, index, collapse);
    return row(
        row(
            actionItem(icon, index, index) +
            title(name)
        ) +
        actionItem("show"),
        "",
        collapse ? " collapse" : ""
    )
}

function activityListItems(list, index, collapse = true) {
    // console.log("activityListItems", list, index);
    if (!list) {
        return "";
    }
    return titleRow(
            list.name + circle("(" + list.items.length + ")"),
            list.icon,
            index,
            collapse
        ) +
        cardList(
            list.items.map(activityCard).join(""),
            collapse
        );
}

function activityList(list, collapse = true) {
    if (!list) {
        return "";
    }
    return div(
        "activity-list",
        list.map(
            (items, index) => activityListItems(items, index, collapse)
        ).join("")
    );
}


function cardListSection(titleText, action, subtitleText = "", cards = []) {
    return sectionTitle(title(titleText) +
        actionItem("add-place", "timeline", titleText, "Add", "black")
    ) + subtitle(subtitleText) + cards.join("")
}

