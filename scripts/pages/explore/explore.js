/*
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    id = 0,
    kind = "explore",
    booking_index = -1
 */
/* KEYS IN ORDER:
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
    match_percent = "100%"
 */

/*
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
    match_percent = "100%"
 */
const EXPLORE_CANNON_BEACH = exploreCard(...EXPLORE_DATA[0]);
const EXPLORE_HANNA_LEVIN = exploreCard(...EXPLORE_DATA[1]);
const EXPLORE_LOQUITA3 = exploreCard(...EXPLORE_DATA[2]);
const EXPLORE_LOQUITA2 = exploreCard(...EXPLORE_DATA[3]);
const EXPLORE_LOQUITA1 = exploreCard(...EXPLORE_DATA[4]);
const EXPLORE_CONSTANIA = exploreCard(...EXPLORE_DATA[5]);
const EXPLORE_ROGUE = exploreCard(...EXPLORE_DATA[6]);
const EXPLORE_BRASIL = exploreCard(...EXPLORE_DATA[7]);
const EXPLORE_YOICHIS = exploreCard(...EXPLORE_DATA[8]);
const EXPLORE_LOS_AGAVES = exploreCard(...EXPLORE_DATA[9]);

const EXPLORE_CARDS = [
    EXPLORE_CONSTANIA,
    EXPLORE_LOQUITA3,
    EXPLORE_HANNA_LEVIN,
    EXPLORE_BRASIL,
    EXPLORE_YOICHIS,
    EXPLORE_LOS_AGAVES,
    EXPLORE_CANNON_BEACH,
    EXPLORE_ROGUE,
];

function explorePage(selected = false) {
    // let columns = [[], []];
    // EXPLORE_CARDS.forEach((c, i) => {
    //     columns[i % columns.length].push(c)
    // });
    let lists = [];
    // columns.forEach(c => lists.push(cardList(c.join(""))));
    lists.push(cardList(EXPLORE_CARDS.join("")));

    return page(
        selected,
        "explore",
        "Explore",
        [
            "All",
            "People &#124;" + icon("chevron_down"),
            "Things to Do &#124;" + icon("chevron_down"),
            "Restaurants &#124;" + icon("chevron_down"),
            "Lodging &#124;" + icon("chevron_down"),
        ],
        "All",
        row(lists.join("")),
        "ALL",
        "",
        "",
        "Search the World"
    );
}

// &#124;
