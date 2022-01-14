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

function cardPhoto(c) {
    return div("card-photo", c);
}

function cardPerson(person) {
    return div(
        "person-icon",
        circle(personItem("person", "connect", person.id, person))
    );
}

function cardPeople(peopleList) {
    return div(
        "card-people",
        [...peopleList].map((p) => cardPerson(p)).join("")
    );
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
    tags = []
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
                                    cardPeople(people) +
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

function connectCard(
    messageList = [],
    title = "",
    subtitle = "",
    id = "",
    people = [],
    which=""
) {
    return card(
        "connect",
        div(
            "titles",
            row(icon("people") + col(cardTitle(title) + cardSubtitle(subtitle)))
        ) + actionItem("open", which, id),
        row(actionItem("add") + cardPeople(people)) +
            messagePanel(messageList, "white")
    );
}

function settleCard(who, amount, when = "", id = "") {
    return card(
        "settle",
        div(
            "titles settle",
            row(
                icon("settle") +
                    col(cardTitle(`Pay ${amount}`) + cardSubtitle(who.name))
            )
        ) + actionItem("open", "settle_list", id),
        text(when) + text("All Activities - Net"),
        [],
        ["settle"]
    );
}

function exploreCard(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id = ""
) {
    return card(
        "explore",
        div(
            "titles explore",
            row(
                icon("explore") + col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + actionItem("open", "explore_detail", id),
        text(content),
        people,
        actions,
        imagePath,
        tags
    );
}

function exploreDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id = ""
) {
    return detail(
        "explore",
        "Details",
        div(
            "titles explore",
            row(
                // icon("explore") +
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + text(content),
        people,
        actions,
        imagePath,
        tags
    );
}

function connectPersonDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id = ""
) {
    return detail(
        "connect",
        "Details",
        div(
            "titles explore",
            row(
                // icon("explore") +
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + col(text(content) + text("Friends:") + cardPeople(people)),
        [],
        [],
        imagePath,
        tags
    );
}

function exploreCardNotification(quantity) {
    return card(
        "explore",
        div(
            "titles explore",
            row(
                icon("explore") +
                    col(
                        cardTitle("Explore") +
                            cardSubtitle(`Santa Barbara, +12 more`)
                    )
            )
        ) +
            actionItem(
                "open",
                "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=765%3A1510&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=765%3A1510&show-proto-sidebar=0",
                "",
                ""
            ),
        text(`${quantity} new cards from people you love!`),
        [],
        ["explore"],
        ""
    );
}

function boardNotificationCard(who, quantity, which) {
    return card(
        "board",
        div(
            "titles board",
            row(icon("board") + col(cardTitle("Dream") + cardSubtitle(which)))
        ) +
            actionItem(
                "open",
                "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=724%3A3890&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=724%3A3890&show-proto-sidebar=0"
            ),
        text(
            `${quantity} new items added to your linked ${which} board by your friend ${who.name}.`
        ),  
        [who],
        ["board"]
    );
}

function planCard(title, subtitle, content, people = [], actions = []) {
    return card(
        "plan",
        div(
            "titles plan",
            row(
                icon("plan") +
                    col(cardTitle(title) + cardSubtitle(`${subtitle}`))
            )
        ) + actionItem("open", "plan_detail"),
        content,
        people,
        actions
    );
}
