// function exploreCard(
//     imagePath = "images/photos/cannon-beach.jpg",
//     title = "",
//     subtitle = "",
//     content = "",
//     tags = [],
//     people = [],
//     actions = [],
//     id = ""
// ) {
//     return card(
//         "explore",
//         div(
//             "titles explore",
//             row(
//                 icon("explore") + col(cardTitle(title) + cardSubtitle(subtitle))
//             )
//         ) + actionItem("open", "explore_detail", id),
//         text(content),
//         people,
//         actions,
//         imagePath,
//         tags
//     );
// }

function exploreCardContent(
    kind,
    title,
    subtitle,
    body = "",
    groups = [],
    actions = "",
    image,
    tags = [],
    id = -1,
    kind2 = "",
    booking_index = -1,
    match_percent = 100
) {

    let qty = 0;
    if (groups && groups[0] && groups[0].people) {
        qty = groups[0].people.length;
    }
    // console.log("booking_index", booking_index)
    let booking = "";
    if (booking_index >= 0) {
        booking = actionItem("book", "book", -1, "Book Now!");
    }
    // const booking = "";
    return div(
        `card ${kind} ${kind2}`,
        // img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(
            cardTags(tags) +
            cardTitles("explore", title, subtitle, -1, -1, "explore_detail")
        ) +
        row(
            col(
                (kind2 === "people" ? a("Local Guide", "#") +
                    selectOptionsComponent("", [
                        {name: "10 Collections:"},
                        {name: "Santa Barbara, CA"},
                        {name: "Portland, OR"},
                        {name: "New York, NY"},
                        {name: "Austin, TX"},
                        {name: "San Francisco, CA"},
                        {name: "Los Angeles, CA"},
                        {name: "Seattle, WA"},
                        {name: "Vancouver, BC"},
                        {name: "Anchorage, AK"},
                        {name: "Paris, FR"}
                    ]) : "") +
                text(`${match_percent}% match`) +
                row(
                    col(cardGroups(groups)) +
                    stack(
                        booking +
                        actionItem("directions", "", "", "Show Map", "",false)
                    )
                )
                + actionList(`card-actions`, actions, true, qty)
            )
        )
        // img(
        //     "background bottom",
        //     "images/backgrounds/bottom-gradient-black.svg"
        // )
        ,
        (image ? `style="background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.25)), black url('${image}') center/cover no-repeat;"` : "") +
        action("open", "explore_detail", id)
    )
}

function participant(p) {
    return row(
        // text(p.person.isCurrentUser ? "*" : "-") +
        personIcon(p.person) +
        hashTag(p.status) +
        hashTag(p.paid ? "Paid" : "unpaid", "green")
    );
}

function plan(p) {
    return row(
        selectDate("", p.timeStamp) +
        selectTime("", p.timeStamp)
    ) + p.participants.map(participant).join("");
}


function exploreCardDetailContent(
    kind,
    title,
    subtitle,
    body = "",
    groups = [],
    actions = "",
    image,
    tags = [],
    id = -1,
    kind2 = "",
    booking_index = -1,
    match_percent = 100,
    location = [0, 0],
    description = "",
    plans = []
) {
    // const otherActions = ["review", "check-in"].reverse();
    const responseActions = ["accept", "counter", "decline"].reverse();
    const payAction = ["pay"];

    let qty = 0;
    if (groups && groups[0] && groups[0].people) {
        qty = groups[0].people.length;
    }
    // console.log("booking_index", booking_index)
    let booking = "";
    if (booking_index >= 0) {
        booking = actionItem("book", "book", -1, "Book Now!");
    }
    // const booking = "";
    return div(
        `detail stack ${kind} ${kind2}`,
        // img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(
            div(
                "titles",
                icon(kind, "black") +
                div("",
                    row(
                        cardTitle(title) +
                        actionButton("Alternatives", "", "", "", `style="width: auto; background: #F9A831cc"`)
                    ) +
                    cardSubtitle(subtitle) +
                    cardSubtitle(a(body))
                )
            )
        ) +
        row(
            col(
                (kind2 === "people" ? a("Local Guide", "#") +
                    selectOptionsComponent("", [
                        {name: "10 Collections:"},
                        {name: "Santa Barbara, CA"},
                        {name: "Portland, OR"},
                        {name: "New York, NY"},
                        {name: "Austin, TX"},
                        {name: "San Francisco, CA"},
                        {name: "Los Angeles, CA"},
                        {name: "Seattle, WA"},
                        {name: "Vancouver, BC"},
                        {name: "Anchorage, AK"},
                        {name: "Paris, FR"}
                    ]) : "") +
                text(`${match_percent}% match`) +
                row(
                    col(cardGroups(groups), "", "event rounded framed padded") +
                    stack(
                        booking +
                        actionItem("directions","","","Directions", false)
                    )
                ) +
                actionList(`card-actions`, actions, false, qty, "black") +
                label("", "Events:") +
                (plans.length>0 ?
                div(
                    "event rounded framed padded",
                    plans.map(plan).join("") +
                    (plans[0].participants[0].status === "Invited" ?
                        actionList("controls-response", responseActions, false, 0, "black") : "") +
                    (plans[0].participants[0].status !== "Invited" && !plans[0].participants[0].paid ?
                        actionList("controls-response", payAction, false, 0, "black") : "")
                    // actionList("controls-other", otherActions, false, 0, "black") +
                ) : "")
            )
        ) +
        cardTags(tags) +
        img("detail-image", image) +
        text(description)
    )
}

function exploreCard(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    id = 0,
    kind = "explore",
    booking_index = -1,
    match_percent = 100
) {
    return exploreCardContent(
        "explore",
        title,
        subtitle,
        "",
        groups,
        actions,
        imagePath,
        tags,
        id,
        kind,
        booking_index,
        match_percent
    );
}

function exploreCardDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    id = 0,
    kind = "explore",
    booking_index = -1,
    match_percent = 100,
    location = [0, 0],
    description = "",
    plans = []
) {
    return exploreCardDetailContent(
        "explore",
        title,
        subtitle,
        content,
        groups,
        actions,
        imagePath,
        tags,
        id,
        kind,
        booking_index,
        match_percent,
        location,
        description,
        plans
    );
}

function exploreDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    which = -1
) {
    return detail(
        "explore",
        "Details",
        div(
            `titles explore ${which}`,
            row(
                // icon("explore") +
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + text(content),
        groups,
        actions,
        imagePath,
        tags,
        which
    );
}

function exploreCardNotification(quantity, groups = []) {
    return card(
        "explore",
        "Explore",
        `Santa Barbara, +12 more`,
        text(`${quantity} new cards from people you love!`),
        groups,
        ["explore"],
        "",
        [],
        -1,
        "",
        "",
        "explore_detail"
    );
}
