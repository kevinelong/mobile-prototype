const cardList = content => div("card-list", content);

const card = (kind, title, body = "", people = "", actions = "", image="") => div(
    `card ${kind}`,
    img("background top", "images/backgrounds/top-gradient-black.svg") +
    cardSection(
        cardTitle(title)
    ) + contentPanel(body) +
    cardSection(
        cardQuadrant(
            cardPeople(people) +
            cardActions(`card-actions`, actions)
        )
    ) +
    img("background bottom", "images/backgrounds/bottom-gradient-black.svg")
    ,
    image ? `style="background-image: url('${image}');"` : ""
);

const connectCard = (title, subtitle = "") => card("connect",
    div("titles",
        row(
            icon("people") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) +
    actionItem("open"),
    messagePanel([
        ["Are you ready for mimosas?", "KL"],
        ["Oh, so ready...", "GB"],
        ["Waffle bar is where I'm at!", "NM"],
    ]),
    ["KL", "GB", "NM"],
    ["share", "heart", "pin"],
    "images/cannon-beach.jpg"
);

const settleCard = (who, amount) => card("settle",
    div("titles settle",
        row(
            icon("settle") +
            col(
                cardTitle("Settle") +
                cardSubtitle(who)
            )
        )
    ) + actionItem("open"),
    text(`You owe ${amount}`),
    [],
    ["settle"]
);
const exploreCard = (imagePath="images/photos/cannon-beach.jpg", title="", subtitle="", content="") => card("explore",
    div("titles explore",
        row(
            icon("explore") +
            col(
                cardTitle(title) +
                cardSubtitle(subtitle)
            )
        )
    ) + actionItem("open"),
    text(content),
    [],
    [],
    imagePath
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
    ) + actionItem("open"),
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
