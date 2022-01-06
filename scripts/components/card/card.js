const cardText = (c) => div("card-text", c);
const cardSection = (c) => div("card-section", c);
const cardQuadrant = (c) => div("card-quadrant", c);
const cardTitle = (c) => div("card-title", c);
const cardTitleText = (c) => div("card-title-text", c);
const cardSubtitle = (c) => c ? div("card-subtitle", c) : '';
const cardPhoto = (c) => div("card-photo", c);

const personIcon = (p) => div("person-icon",
    circle(actionItem("person", "connect","1", p, "black" ))
);

const cardPeople = (peopleList) => div("card-people",
    [...peopleList].map(p => personIcon(p)).join("")
);


const cardTags = (tags) => div("card-tags",
    [...tags].map(p => hashTag(p)).join("")
);

const cardActions = (id, actionList = []) => div("action-list",
    [...actionList].map(c => actionItem(c, actionList.length == 1)).join("")
    , `id="${id}" class='action-list'`
);

const cardList = content => div("card-list", content);

const card = (kind, title, body = "", people = "", actions = "", image = "", tags = []) => div(
    `card ${kind}`,
    img("background top", "images/backgrounds/top-gradient-black.svg") +
    cardSection(
        cardTitle(title)
    ) + contentPanel(body) +
    cardSection(
        cardTags(tags) +

        cardQuadrant(
            cardPeople(people) +
            cardActions(`card-actions`, actions)
        )
    ) +
    img("background bottom", "images/backgrounds/bottom-gradient-black.svg")
    ,
    image ? `style="background-image: url('${image}');"` : ""
);

const detail = (kind, title, body = "", people = "", actions = "", imagePath = "", tags = []) => div(
    `detail ${kind}`,
    img("detail-image", imagePath) +
    cardSection(
        cardTitle(body)
    ) +
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

const connectCard = (title, subtitle = "", id="") => card("connect",
    div("titles",
        row(
            icon("people") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) +
    actionItem("open", "connect_chat", id),
    messagePanel([
        ["Are you ready for mimosas?", "KL"],
        ["Oh, so ready...", "GB"],
        ["Waffle bar is where I'm at!", "NM"],
    ], "white"),
    ["Kevin Long", "Greg Bellowe", "Nina Marie"],
    ["share", "heart", "pin"],
    "images/cannon-beach.jpg"
);

const settleCard = (who, amount, id="") => card("settle",
    div("titles settle",
        row(
            icon("settle") +
            col(
                cardTitle("Settle") +
                cardSubtitle(who)
            )
        )
    ) +
    actionItem("open", "settle_list", id),
    text(`You owe ${amount}`),
    [],
    ["settle"]
);
const exploreCard = (imagePath = "images/photos/cannon-beach.jpg", title = "", subtitle = "", content = "", tags = [], people = [], actions = [], id="") => card("explore",
    div("titles explore",
        row(
            icon("explore") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) +
    actionItem("open", "explore_detail", id),
    text(content),
    people,
    actions,
    imagePath,
    tags
);
const exploreDetail = (
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id="") => detail(
        "explore",
    "Details",
    div("titles explore",
        row(
            // icon("explore") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) + text(content),
    people,
    actions,
    imagePath,
    tags
);
const exploreCardNotification = (quantity) => card("explore",
    div("titles explore",
        row(
            icon("explore") +
            col(
                cardTitle("Explore") +
                cardSubtitle(``)
            )
        )
    ) +
    actionItem("open",  "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=765%3A1510&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=765%3A1510&show-proto-sidebar=0",
    "","") ,
    text(`You have ${quantity} new items to Explore!`),
    [],
    [],
    ""
);

const boardCard = (who, quantity) => card("board",
    div("titles board",
        row(
            icon("board") +
            col(
                cardTitle("Dream") +
                cardSubtitle(``)
            )
        )
    ) + actionItem("open"),
    text(`${who} added an items to your board.`),
    [],
    ["pin"]
);

const planCard = (who, what) => card("plan",
    div("titles plan",
        row(
            icon("plan") +
            col(
                cardTitle("Plan") +
                cardSubtitle(``)
            )
        )
    ) + actionItem("open"),
    text(`${who} invited you to ${what}.`),
    [],
    ["plan"]
);
