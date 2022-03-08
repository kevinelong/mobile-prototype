const Period = () => {
    return { name: "", from: "", to: "", color: "", ideas: [] };
};

let currentLocation = "Santa Barbara";

function VitaEvent(
    period = Period(),
    kind = "restaurants",
    currentMood = "hungry",
    color = "#999999"
) {
    period.color = period.color ? period.color : color;
    return {
        what: period.name,
        when: period.from,
        where: currentLocation,
        duration: period.to,
        imagePath: "",
        titleText: period.name,
        subtitleText:
            period && period.ideas ? period.ideas.length + " Smart Ideas!" : "",
        content: "",
        tags: period.ideas,
        groups: [],
        actions: [],
        id: 0,
        kind: kind,
        booking_index: -1,
        period: period,
        places: [],
        currentMood: currentMood,
    };
}

const PRE_BREAKFAST = 0;
const BREAKFAST = 1;
const MORNING_EXPERIENCE = 2;
const LUNCH = 3;
const AFTERNOON_EXPERIENCE = 4;
const DINNER = 5;
const EVENING_EXPERIENCE = 6;
const LATE_NIGHT = 7;

/*
1) pre breakfast experience 5am-7:30am
2) breakfast 7:45am-9:30am
3) morning experience 9:45am – 11:00am
4) lunch 11:15am – 2:30pm
5) afternoon experience 2:45 – 4:45pm
6) dinner 5:00pm – 9:00pm
7) evening experience 9:15pm – 11:59pm
8) late night experience 12:00am – 3:00am
 */
//Ensure every period has all the default VitaEvent properties.
const injectVitaEventProps = (periods) =>
    periods.map((p) => {
        return { ...p, ...VitaEvent(p), events: [] };
    });

const getPeriods = () =>
    injectVitaEventProps([
        {
            name: "pre-breakfast",
            from: "5:00am",
            to: "7:30pm",
            color: "darkred",
            ideas: [
                "serene points of interest",
                "nature work-out experiences",
                "self-guided nature tours",
                "guided nature tours",
                "local spas, gyms & yoga centers",
                "local fitness guides",
                "popular coffee & tea venues",
                "hop-on hop-off tours",
                "local resources",
                "members nearby",
                "interesting locals",
                "dog parks",
                "virtual tours",
            ],
        },
        {
            name: "breakfast",
            from: "7:45am",
            to: "9:30am",
            color: "darkorange",
            ideas: [
                "view",
                "outdoor seating",
                "to go",
                "fast food",
                "booze for breakfast",
                "where singles go",
                "members nearby",
                "American Cuisine",
                "Mexican Cuisine",
                "Japanese Cuisine",
                "popular coffee & tea venues",
            ],
        },
        {
            name: "morning experience",
            from: "9:45am",
            to: "11:00am",
            color: "goldenrod",
            ideas: [
                "e-bike rental",
                "local hop-on hop-off tours",
                "culture/history",
                "adventure",
                "places to see now",
                "Drives",
                "hiking",
                "Water sports",
                "Boating/sailing",
                "All day guided tours",
                "Self-guided tours",
                "guides",
            ],
        },
        {
            name: "lunch",
            from: "11:15am",
            to: "2:30pm",
            color: "darkgreen",
            ideas: [
                "Outdoor Seating",
                "People Watching",
                "Where Singles Go",
                "Liquid Lunch",
                "Mexican Cuisine",
                "American Cuisine",
                "Japanese Cuisine",
                "Fine Dining",
                "Fast Food",
                "More...",
            ],
        },
        {
            name: "afternoon experience",
            from: "2:45pm",
            to: "4:45pm",
            color: "blue",
            ideas: [
                "e-bike rental",
                "outdoor bars/pubs",
                "Wine Experiences",
                "sailing tours",
                "adventure tours",
                "stand-up paddle",
                "Beach",
                "Live music",
                "Places to see now",
                "Adventure",
                "Culture/history",
            ],
        },
        {
            name: "dinner",
            from: "5:00pm",
            to: "9:00pm",
            color: "darkslateblue",
            ideas: [
                "Outdoor seating",
                "view",
                "People watching",
                "$$-$$$$",
                "Japanese Cuisine",
                "Korean Cuisine",
                "Vietnamese",
                "Italian Cuisine",
                "French Cuisine",
                "Food Experiences",
                "guides",
            ],
        },
        {
            name: "evening experience",
            from: "9:15pm",
            to: "11:45pm",
            color: "#885588",
            ideas: [
                "places to go now",
                "guides",
                "guided experiences",
                "Drive in movie theatres",
                "Comedy",
                "Beach",
                "View",
                "People watching",
                "Live music (Alternative genre)",
                "Live music (Pop genre)",
                "Live music (classical genre)",
                "Live music (Jazz genre)",
            ],
        },
        {
            name: "late-night experience",
            from: "12:00am",
            to: "3:00am",
            color: "darkviolet",
            ideas: [
                "Burlesque",
                "Restaurants open",
                "Beach",
                "View",
                "People watching",
            ],
        },
    ]);

let current_period = LUNCH;

function Day(when = "", events = []) {
    if (!Array.isArray(events)) {
        // console.log("events", events);
        return;
    }

    let periods = getPeriods();

    periods.forEach((p) => {
        events.forEach((e) => {
            if (e.when > p.from && e.when < p.to) {
                p.events.push(e);
            }
        });
    });

    return {
        when: when,
        events: [...events, ...getPeriods()],
    };
}

const DAYms = 24 * 60 * 60 * 1000;
const todayDate = new Date();
const yesterdayDate = new Date(todayDate.getTime() - DAYms);
const tomorrowDate = new Date(todayDate.getTime() + DAYms);

const THINGS_TO_DO = [
    {
        name: "Thing 1",
    },
    {
        name: "Thing 2",
    },
];
const THINGS_TO_DO_FILTERS = ["All", "Indoor", "Outdoor", "Group"];

const MOODS = [
    { name: "Romantic" },
    { name: "Active" },
    { name: "Relaxed" },
    { name: "Thirsty" },
    { name: "Hungry" },
    { name: "Bored" },
];

const DESTINATIONS = [
    {
        name: "Santa Barbara, California USA",
    },
    {
        name: "Las Vegas, Nevada USA",
    },
];
const RESTAURANTS = [
    {
        name: "Loquita",
    },
    {
        name: "Los Agaves",
    },
    {
        name: "Santo Mezcal",
    },
    {
        name: "La Super-Rica Taqueria",
    },
];
const RESTAURANT_FILTERS = [
    "All",
    "Mexican",
    "Chinese",
    "Indian",
    "Italian",
    "Thai",
    "American",
];
const LODGING = [
    {
        name: "Hilton",
    },
    {
        name: "Marriott",
    },
];
const LODGING_FILTERS = ["All", "Luxury", "Standard", "Bed &amp; Breakfast"];

const PATH_STATIC = "";
const PATH_IMAGES = `${PATH_STATIC}images/`;

const PATH_ICONS = `${PATH_IMAGES}/icons/`;
const PREFIX_ICONS = `${PATH_ICONS}/icon-`;
const SUFFIX_ICONS = `.svg`;

const PATH_FACES = `${PATH_IMAGES}/faces/`;
const PREFIX_FACES = `${PATH_FACES}/face`;
const SUFFIX_FACES = `.png`;

const RUBY = 0;
const JOE = 1;
const BF = 2;

const peopleList = [
    {
        id: 1,
        name: "Ruby Red",
        isCurrentUser: true,
        groups: [],
    },
    {
        id: 2,
        name: "Joe Shmoe",
        isCurrentUser: false,
        groups: [],
    },
    {
        id: 3,
        name: "Betty Ford",
        isCurrentUser: false,
        groups: [],
    },
];

peopleList[RUBY].groups = [
    {
        people: [peopleList[BF]],
        title: "Friends with",
        groupName: "friend",
        subtitle: "",
    },
    {
        people: [peopleList[BF]],
        title: "Linked To",
        groupName: "currator",
        subtitle: "",
    },
    {
        people: [peopleList[BF], peopleList[JOE]],
        title: "Plans With",
        groupName: "Co-Planner",
        subtitle: "",
    },
    {
        people: [peopleList[BF], peopleList[JOE]],
        title: "Followed By",
        groupName: "explorer",
        subtitle: "",
    },
];

peopleList[JOE].groups = [
    {
        people: [peopleList[BF]],
        title: "Friends with",
        groupName: "friend",
        subtitle: "",
    },
    {
        people: [peopleList[BF]],
        title: "Linked To",
        groupName: "currator",
        subtitle: "",
    },
    {
        people: [peopleList[BF], peopleList[RUBY]],
        title: "Plans With",
        groupName: "Co-Planner",
        subtitle: "",
    },
    {
        people: [peopleList[BF], peopleList[RUBY]],
        title: "Followed By",
        groupName: "explorer",
        subtitle: "",
    },
];

peopleList[BF].groups = [
    {
        people: [peopleList[RUBY]],
        title: "Friends with",
        groupName: "friend",
        subtitle: "",
    },
    {
        people: [peopleList[RUBY]],
        title: "Linked To",
        groupName: "currator",
        subtitle: "",
    },
    {
        people: [peopleList[RUBY], peopleList[JOE]],
        title: "Plans With",
        groupName: "Co-Planner",
        subtitle: "",
    },
    {
        people: [peopleList[RUBY], peopleList[JOE]],
        title: "Followed By",
        groupName: "explorer",
        subtitle: "",
    },
];

one_person = peopleList.filter((p, i) => i < 1);
two_people = peopleList.filter((p, i) => i < 2);
three_people = peopleList.filter((p, i) => i < 3);

group_of_one = [
    {
        people: one_person,
        title: "Recommended By",
        // title: one_person.map(p => p.name).join(", "),
        groupName: "Friend",
        subtitle: "",
    },
];

group_of_two = [
    {
        people: two_people,
        title: "Recommended By",
        groupName: "Friend",
        subtitle: "",
    },
];

group_of_three = [
    {
        people: three_people,
        title: "Recommended By",
        groupName: "Friend",
        subtitle: "",
    },
];

currators = [
    {
        people: three_people,
        title: "board linked with",
        groupName: "currator",
        subtitle: "sharing a total of 23 cards",
    },
];

coplanners = [
    {
        people: three_people,
        title: "planned with",
        groupName: "co-planner",
        subtitle: "plan contains 23 cards",
    },
];

let messageListExample = [
    {
        text: "Hey girl welcome!",
        person: peopleList[RUBY],
    },
    {
        text: "Hi! Thanks for the invite",
        person: peopleList[BF],
    },
    {
        text: "So... I have a long weekend in 2 weeks. Thinkin' of taking that trip to Santa Barbara I have been telling you about.",
        person: peopleList[RUBY],
    },
    {
        text: "What do you think? Wanna join me?",
        person: peopleList[RUBY],
    },
    {
        text: "I don't have a long weekend :(",
        person: peopleList[BF],
    },
    {
        text: "BUT I can join you on Saturday and Sunday",
        person: peopleList[BF],
    },
    {
        text: "??",
        person: peopleList[BF],
    },
];

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
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        // "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        "Authentic Spanish Food",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_three,
        ["favorite", "share", "collect"],
        0,
        "restaurants",
        3,
        100,
        [34.41421031876199, -119.69164738460584],
    ],

    [
        "images/photos/brasil_arts_cafe.jpeg",
        "Brasil Arts Cafe",
        "Santa Barbara",
        // "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations.",
        "Traditional Brazilian Fare",
        ["Brazilian", "Cafe"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        1,
        "restaurants",
        4,
        97,
        [34.42427273044929, -119.70538318430323],
    ],
    [
        "images/photos/yoichis.jpg",
        "Yoichi's",
        "Santa Barbara",
        // "A prix fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
        "Sushi in an intimate setting",
        ["Japanese", "Sushi", "Prix fixe"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        2,
        "restaurants",
        4,
        95,
        [34.42715715496026, -119.70249364197355],
    ],
    [
        "images/photos/los_agaves.jpg",
        "Los Agaves",
        "Santa Barbara",
        // "The bold flavors of Mexico, an authentic dining experience, high-quality ingredients.",
        "Flavors of Mexico",
        ["Mexican", "Family", "Catering", "Restaurant"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        3,
        "restaurants",
        4,
        90,
        [34.4375036989364, -119.72734258675358],
    ],
    [
        "images/photos/santo_mezcal.jpg",
        "Santo Mezcal",
        "Santa Barbara",
        "Modern Mexican Cuisine",
        ["Mexican", "Happy Hour", "Catering", "Restaurant"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        4,
        "restaurants",
        4,
        90,
        [34.4134427932841, -119.69127914319921],
    ],
    [
        "images/photos/la_super-rica_taqueria.jpg",
        "La Super-Rica Taqueria",
        "Santa Barbara",
        // "Celebrated Mexican spot for fish tacos, tamales & more served up in modest digs with patio seating.",
        "Celebrated Mexican Spot",
        ["Mexican", "Dine-in", "Takeout", "Restaurant"],
        DEFAULT_GROUPS,
        ["favorite", "share", "collect"],
        5,
        "restaurants",
        4,
        90,
        [34.42790056991083, -119.68722191681411],
    ],
    [
        "images/photos/constantia.jpg",
        "Bridlewood Estate",
        "Santa Barbara",
        "Wine & Food Testing Tour",
        [
            "Food &amp; Wine Pairing",
            "date ideas",
            "weekend getaways",
            "wine tasting",
        ],
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
        6,
        "things-to-do",
        4,
        85,
        [0, 0],
    ],
    [
        "images/photos/hanna-levin.png",
        "Hanna Levin",
        "New Taste Match to Follow!",
        "23 Similar Tastes <a href=''>View All</a>",
        ["Local Guide", "Taste-Match"],
        [
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Recommended By",
                groupName: "Mutual Friend",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Collected",
                groupName: "Time",
            },
        ],
        ["collect", "share", "invite"],
        7,
        "people",
        -1,
        97,
        [0, 0],
    ],
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
        8,
        "places-to-see",
        -1,
        85,
        [45.884161669751066, -123.96863053734513],
    ],
    [
        "images/photos/rogue_astoria.jpg",
        "Rogue Brewery",
        "Astoria Oregon",
        "Beer tasting experience",
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
        9,
        "restaurants",
        4,
        85,
        [46.196750395147454, -123.79762603067174],
    ],
    [
        "images/photos/camel_valley_wines.jpg",
        "Stolpman Vineyard",
        "Santa Barbara",
        "Wine Tasting and Horse Back Riding Tour",
        ["Food &amp; Wine Tasting Tour", "wine tasting"],
        [
            {
                people: [peopleList[BF]],
                title: "Recommended By",
                groupName: "Mutual Friend",
            },
            {
                people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
                title: "Collected",
                groupName: "Item",
            },
        ],
        ["favorite", "share", "collect"],
        10,
        "things-to-do",
        4,
        85,
        [34.64230332164125, -120.43610020209037],
    ],
    [
        "images/photos/gargiulo_vineyards.jpg",
        "Rusack Winery",
        "Napa Valley Solvang",
        "Make Your Own Wine Experience",
        ["Food &amp; Wine Tasting Tour", "wine tasting"],
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
        11,
        "things-to-do",
        4,
        85,
        [34.638058462065956, -120.14186578859605],
    ],
];

const ADItem = (id, icon, name, items = []) => {return {id: id, icon: icon, name: name, items: items}}

const activityData = [
    ADItem("things-to-do", "things-to-do-black", "Things to Do", []),
    ADItem("places-to-see", "landscape-black", "Places to See", []),
    ADItem("restaurants", "restaurants-black", "Restaurants", []),
    ADItem("lodging", "lodging-black", "Lodging", []),
    ADItem("transportation", "transportation-black", "Transportation", []),
    ADItem("people", "connect-black", "People", []),
];

function cardData(
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
    return {
        imagePath: imagePath,
        title: title,
        subtitle: subtitle,
        content: content,
        tags: tags,
        groups: groups,
        actions: actions,
        id: id,
        kind: kind,
        booking_index: booking_index,
        match_percent: match_percent
    }
}

let activityMap = {};

activityData.map(a => a.id).forEach((c, i) => activityMap[c] = activityData[i]);

EXPLORE_DATA.map(list => cardData(...list)).forEach(item => {
    activityMap[item.kind].items.push(item)
});