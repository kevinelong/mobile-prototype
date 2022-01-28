
const EXPLORE_DATA = [
    [
        "images/photos/cannon-beach.jpg",
        "Haystack Rock",
        "Cannon Beach, Oregon",
        "This is an iconic photo opportunity",
        ["Landmark", "Recommended"],
        [{people: [peopleList[BF]], title: "Pinned By", groupName: "explorer", subtitle: ""}],
        ["invite", "schedule", "pin"],
        "1",
        true,
        "Recommended",
        "Local Expert",
    ],
    [
        "images/photos/hanna-levin.png",
        "Hanna Levin",
        "New Taste Match to Follow!",
        "Hanna Levin has rated over 20 places, including 2 you both love!",
        ["Influencer", "Recommended"],
        [
            {
                people: [peopleList[BF]],
                title: "Recommended By",
                groupName: "Friend"
            },
            {
                people: [peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Expert"
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Taste Match"
            },
        ],
        ["invite", "schedule", "pin"],
        "2",
        true,
        "Recommended",
        "Local Expert",
    ],
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_one,
        ["invite", "schedule", "pin"],
        "2",
        true,
        "Recommended",
        "Local Expert",
    ],
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_two,
        ["invite", "schedule", "pin"],
        "2",
        true,
        "Recommended",
        "Local Expert",
    ],
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_three,
        ["favorite" , "share", "pin"],
        "2",
        true,
        "Recommended",
        "Local Expert",
    ],
];

const EXPLORE_CANNON_BEACH = exploreCard(...EXPLORE_DATA[0]);
const EXPLORE_HANNA_LEVIN = exploreCard(...EXPLORE_DATA[1]);
const EXPLORE_LOQUITA3 = exploreCard(...EXPLORE_DATA[2]);
const EXPLORE_LOQUITA2 = exploreCard(...EXPLORE_DATA[3]);
const EXPLORE_LOQUITA1 = exploreCard(...EXPLORE_DATA[4]);

const EXPLORE_CARDS = [
    EXPLORE_LOQUITA3,
    // EXPLORE_LOQUITA2,
    // EXPLORE_LOQUITA1,
    EXPLORE_HANNA_LEVIN,
    EXPLORE_CANNON_BEACH,
];

function explorePage(selected = false) {
    let columns = [[], []];
    EXPLORE_CARDS.forEach((c, i) => {
        columns[i % columns.length].push(c)
    });
    let lists = [];
    columns.forEach(c => lists.push(cardList(c.join(""))));

    return page(
        selected,
        "explore",
        "Explore",
        ["All", "Personal", "Matches", "Deals"],
        "All",
        row(lists.join("")),
        "ALL"
    );
}
