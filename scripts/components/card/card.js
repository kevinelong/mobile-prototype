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
    [...actionList].map(c => actionItem(c, actionList.length == 1, "", c)).join("")
    , `id="${id}" class='action-list'`
);

const cardList = content => div("card-list", content);

const card = (kind, title, body = "", people = "", actions = "", image = "", tags = []) => div(
    `card ${kind}`,
    img("background top", "images/backgrounds/top-gradient-black.svg") +
    cardSection(
        cardTitle(title)
    ) + contentPanel(body) +
    ((tags || people || actions)?
        cardSection(
            cardTags(tags) +
            ((people || actions) ?
                cardQuadrant(
                    cardPeople(people) +
                    cardActions(`card-actions`, actions)
                ) : ""))
    :"") +
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

const connectCard = (messageList=[], title="", subtitle = "", id="") => card("connect",
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
    row(actionItem("add") + cardPeople([
        "Kevin Long", "Greg Bellowe", "Nina Marie"
    ]))+
    messagePanel(messageList, "white")
);

const settleCard = (who, amount, id="") => card("settle",
    div("titles settle",
        row(
            icon("settle") +
            col(
                cardTitle(`Pay ${amount}`) +
                cardSubtitle("The Three Amigos")
            )
        )
    ) +
    actionItem("open", "settle_list", id),
    text("Yesterday 12/12/2022") +
    text("All Activities - Net"),
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
const connectPersonDetail = (
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    people = [],
    actions = [],
    id="") => detail(
    "connect",
    "Details",
    div("titles explore",
        row(
            // icon("explore") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) + col(
        text(content) +
        text("Friends:") +
        cardPeople(people)
    ),
    [],
    [],
    imagePath,
    tags
);
const exploreCardNotification = (quantity) => card("explore",
    div("titles explore",
        row(
            icon("explore") +
            col(
                cardTitle("Explore") +
                cardSubtitle(`Santa Barbara, +12 more`)
            )
        )
    ) +
    actionItem("open",  "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=765%3A1510&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=765%3A1510&show-proto-sidebar=0",
    "","") ,
    text(`${quantity} new cards from people you love!`),
    [],
    ["explore"],
    ""
);
//https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=724%3A3890&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=724%3A3890&show-proto-sidebar=1
const boardCard = (who, quantity, which) => card("board",
    div("titles board",
        row(
            icon("board") +
            col(
                cardTitle("Dream") +
                cardSubtitle(which)
            )
        )
    ) + actionItem("open", "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=724%3A3890&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=724%3A3890&show-proto-sidebar=0"),
    text(`${quantity} new items added to your linked ${which} board by your friend ${who}.`),
    ["Greg"],
    ["board"]
);

const planCard = (title, subtitle, content, people=[], actions=[]) => card("plan",
    div("titles plan", row(icon("plan") + col(
                cardTitle(title) +
                cardSubtitle(`${subtitle}`
                )))) + actionItem("open", "plan_detail"),
    content,
    people,
    actions
);
