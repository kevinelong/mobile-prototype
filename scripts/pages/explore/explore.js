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

const DEFAULT_GROUPS = [
    {
        people: [peopleList[BF]],
        title: "Recommended By",
        groupName: "Friend",
    },
    {
        people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
        title: "Recommended By",
        groupName: "Taste Match",
    },
    {
        people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
        title: "Planning with",
        groupName: "Co-Planner",
    },
];

const EXPLORE_DATA = [
    [
        "images/photos/cannon-beach.jpg",
        "Haystack Rock",
        "Cannon Beach, Oregon",
        "This is an iconic photo opportunity",
        ["Landmark", "Recommended"],
        [
            {
                people: [peopleList[BF]],
                title: "Recommended By",
                groupName: "Friend",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Taste Match",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Planning with",
                groupName: "Co-Planner",
            },
        ],
        ["invite", "schedule", "collect"],
        "1",
        "place",
        -1,
        "100%"
    ],
    [
        "images/photos/hanna-levin.png",
        "Hanna Levin",
        "New Taste Match to Follow!",
        "Hanna Levin has rated over 20 places, including 2 you both love!",
        ["Tapas", "Spanish"],
        [
            {
                people: [peopleList[BF]],
                title: "Recommended By",
                groupName: "Friend",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Taste Match",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Planning with",
                groupName: "Co-Planner",
            },
        ],
        ["collect"],
        "2",
        "connect",
        -1,
        "100%"
    ],
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_one,
        ["invite", "schedule", "collect"],
        "2",
        "dining",
        1,
        "100%"
    ],
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_two,
        ["invite", "schedule", "collect"],
        "2",
        "dining",
        2,
        "100%"
    ],
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_three,
        ["favorite", "share", "collect"],
        "2",
        "dining",
        3,
        "100%"
    ],
    [
        "images/photos/constania.jpg",
        "Constantia Glen",
        "Santa Barbara",
        "Wine Tasting Experience",
        ["Wine Tasting"],
        [
            {
                people: [peopleList[BF]],
                title: "Recommended By",
                groupName: "Friend",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Taste Match",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Planning with",
                groupName: "Co-Planner",
            },
        ],
        ["favorite", "share", "collect"],
        "3",
        "activities",
        4,
        "99%"
    ],
    [
        "images/photos/beer_group.jpg",
        "Rogue Brewery",
        "Astoria Oregon",
        "Beer Tasting Experience",
        ["Beer Tasting"],
        [
            {
                people: [peopleList[BF]],
                title: "Recommended By",
                groupName: "Friend",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Taste Match",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Planning with",
                groupName: "Co-Planner",
            },
        ],
        ["favorite", "share", "collect"],
        "3",
        "dining",
        4,
        "98%"
    ],
    [
        "images/photos/brasil_arts_cafe.jpeg",
        "Brasil Arts Cafe",
        "Santa Barbara",
        "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations.",
        ["Brazilian", "Cafe"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        "3",
        "dining",
        4,
        "97%"
    ],
    [
        "images/photos/yoichis.jpg",
        "Yoichi's",
        "Santa Barbara",
        "A prix-fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
        ["Japanese", "Sushi", "Prix fixe"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        "3",
        "dining",
        4,
        "95%"
    ],
    [
        "images/photos/los_agaves.jpg",
        "Los Agaves",
        "Santa Barbara",
        "The bold flavors of Mexico, an authentic dining experience, high-quality ingredients.",
        ["Mexican", "Family", "Catering", "Restaurant"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        "3",
        "dining",
        4,
        "90%"
    ]
];
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
