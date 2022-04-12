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

function cardTitles(kind, title, subtitle = "", which = "", id = 0, page = "") {
    page = page ? page : kind;
    return (
        div(
            "titles",

            icon(kind) +
            col(cardTitle(title) + cardSubtitle(subtitle)
            ) +
            actionItem("open", page, id)
        )
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
    kind = "explore",
    titleText = "",
    subtitleText = "",
    content = "",
    groups = [],
    actions = [],
    image = "",
    tags = [],
    which = -1,
    attrs = "",
    period = "",
    page = "",
    match_percent = "",
    booking_index = -1,
    actionAttribute = ""
) {
    period = period ? period : Period();
    const ve = VitaEvent(period, kind);
    ve.imagePath = image;

    let booking = "";
    if (booking_index >= 0) {
        booking = actionItem("book", "book", booking_index, "Book Now!");
    }
    const match = match_percent ? text(`${match_percent}% match`) : "";
    const groupsContent = groups ? col(cardGroups(groups)) : "";

    return div(
        `card ${kind} ${which}`,
        cardSection(
            cardTags(tags) +
            cardTitles(kind, titleText, subtitleText, which, -1, page) +
            contentPanel(content)
        ) +
        match +
        groupsContent +
        booking +
        actionList(`card-actions`, actions),

        action("open", page, -1) +
        actionAttribute +
        attrs +
        ` data-kind="${cleanName(kind)}" data-which="${which}" ` +
        cardStyle(ve)
    )
}

function paymentCard(
    kind = "restaurants",
    titleText = "",
    subtitleText = "",
    content = "",
    groups = [],
    actions = [],
    image = "",
    tags = [],
    which = -1,
    attrs = "",
    period = "",
    page = "",
    match_percent = "",
    booking_index = -1,
    actionAttribute = ""
) {
    period = period ? period : Period();
    const ve = VitaEvent(period, kind);
    ve.imagePath = image;

    return div(
        `card ${kind} ${which}`,
        contentPanel(
            row(
                subtitle(subtitleText)
            )
        ) +
        cardSection(
            cardTags(tags) +
            div(
                "titles",
                icon(kind) +
                col(
                    cardTitle(titleText) +
                    subtitle("Note")
                ) + content
            )
        ),
        ` data-kind="${cleanName(kind)}" data-which="${which}" ` +
        cardStyle(ve)
    )
}
function amount(content="0", color=""){
    const amount = parseFloat(content);
    const colorClass = color ? color : (amount >= 0 ? "green" : "red");
    return div(`amount ${colorClass}`, currency(amount))
}
function historyCard(
    kind = "restaurants",
    titleText = "",
    subtitleText = "",
    content = "",
    groups = [],
    actions = [],
    image = "",
    tags = [],
    which = -1,
    attrs = "",
    period = "",
    page = "",
    match_percent = "",
    booking_index = -1,
    actionAttribute = ""
) {
    period = period ? period : Period();
    const ve = VitaEvent(period, kind);
    ve.imagePath = image;

    return div(
        `card ${kind} ${which}`,
        cardSection(
            cardTags(tags) +
            div(
                "titles",
                icon(kind) +
                col(
                    subtitle(subtitleText) +
                    cardTitle(titleText) +
                    cardGroups(groups)
                ) + amount(content)
            )
        ),
        ` data-kind="${cleanName(kind)}" data-which="${which}" `
        // cardStyle(ve)
    )
}

function mapCard(
    kind,
    match_percent,
    content = "",
    location = "",
    groups = [],
    actions = [],
    image = "",
    tags = [],
    which = -1,
    attrs = "",
    period = Period()
) {

    // const ve = VitaEvent(period, kind);
    // ve.imagePath = image;

    return div(
        `card ${kind} ${which}`,
        row(
            icon(kind + '-black') +
            div(
                "",
                div(
                    "map-title",
                    content
                ) +
                div(
                    "map-subtitle",
                    location
                )
            ) +
            actionItem("open", "explore_detail", -1, "", "black", true),
            "",
            "map-heading"
        ) +
        row(
            "Guided Experience"
        ) +
        // row(
        //     cardTags(tags)
        // ) +
        row(
            actionItem("chat", "", -1, "Message", "black", false, 0) +
            actionItem("bookmark", "preview", -1, "Favorite", "black", true, 0) +
            // actionItem("alternatives", "preview", -1, "Alternatives", "", false, 0, true) +
            actionItem("Share", "add", -1, "Share", "black", true, 0) +
            actionItem("Message", "add", -1, "Invite", "black", true, 0) +
            actionItem("Directions", "map-on", -1, "Directions", "black", true, 0) +
            select("category", [
                {name: "Things to Do", value: "0"},
                {name: "Places to See", value: "1"},
                {name: "Restaurants", value: "2"},
                {name: "Lodging", value: "3"},
                {name: "Transportation", value: "4"},
                {name: "People", value: "5"},
            ], `placeholder="Category" value="0"`),
            "",
            "preview-actions"
        ) +
        row(
            col( 
                col(
                    `<b>99% match</b>` +
                    cardGroups(
                        [
                            {
                                people: three_people,
                                title: "",
                                groupName: "recommend it",
                                subtitle: "Recommended By",
                            }
                        ]
                    )
                ) +
                col(
                    div("coplanner",
                        "<b>3 co-planners</b>") +
                    row(
                        img("", "images/faces/face3.png") +
                        "invited you",
                        "",
                        "tag invited"
                    ) +
                    row(
                      row(
                            img("", "images/faces/face1.png") +
                            "going",
                            "",
                            "tag going"
                        ) +
                        div("tag paid",
                            "paid"
                        )
                    ),
                    "",
                    "coplanner-panel"
                ) +
                col(
                    col(
                        row(
                            img("", `images/icons/calendar-today-black.svg`) +
                            `27 Jun 2021`
                        ) +
                        row(
                            img("", `images/icons/schedule-black.svg`) +
                            `12:30 - 14:00`
                        )
                    ),
                    "",
                    "date-panel"
                ),
                "",
                "left-column"
            ) +
            col(
                `<img class="child-image" src="${image}">` +
                actionItem("Book", "book", -1, "Book from $65", "", false, 0, true),
                "",
                "right-column"
            ),
            "",
            "main-columns"
        ),
        
        attrs +
        ` data-kind="${cleanName(kind)}" data-which="${which}" `
        // + cardStyle(ve)
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
        item.subtitle,
        item.content,
        item.groups,
        [],
        item.imagePath,
        item.tags,
        index,
        "recommended",
        [],
        "explore_detail"
    );
}

function mapActivityCard(item = {}, index = -1) {
    return mapCard(
        item.kind,
        item.match_percent,
        [
            item.title,
            // item.subtitle,
            item.content
        ].join(" - "),
        item.subtitle,
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
        action("show"),
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

