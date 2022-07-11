const Period = (name = "", from = "", to = "", color = "") => {
    return {name: "", from: "", to: "", color: "", ideas: []};
};

let currentLocation = "Santa Barbara";

function VitaEvent(
    period = Period(),
    kind = "restaurants",
    currentMood = "hungry",
    color = "#336699",
    name = "",
    when = undefined,
    activity = undefined,
) {
    period.color = period.color ? period.color : color;
    return {
        what: name ? name : period.name,
        when: when ? when : period.from,
        where: activity ? activity.name : currentLocation,
        duration: new Date(period.to - period.from),
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
        activity: activity
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





let current_period = LUNCH;

function Day(when, title = "", events = []) {
    if (!Array.isArray(events)) {
        // console.log("events", events);
        return;
    }

    let periods = getPeriods();

    periods.forEach((p) => {
        p.dayWhen = when;
        // p.from = new Date(when.toLocaleString())
        events.forEach((e) => {
            // console.log(e.when, p.from, p.to, p.dayWhen);
            let timeWhen = new Date(e.when);
            timeWhen.setYear(1970);
            timeWhen.setMonth(0);
            timeWhen.setDate(1);
            if (e.when.getYear() === p.dayWhen.getYear() && 
                e.when.getMonth() === p.dayWhen.getMonth() &&
                e.when.getDate() === p.dayWhen.getDate()
            ) {
                if (timeWhen >= p.from && timeWhen < p.to) {
                    e.dayWhen = timeWhen;
                    p.events.push(e);
                }
            }
        });
    });

    // console.log(periods);

    return {
        when: when,
        title: title,
        periods: periods,
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
    {name: "Romantic"},
    {name: "Active"},
    {name: "Relaxed"},
    {name: "Thirsty"},
    {name: "Hungry"},
    {name: "Bored"},
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
        currentTown: "Los Angeles",
        paymentTypes: ["Zelle", "Venmo", "PayPal"],
        paymentSplit: "$60.00 / 3 = $20.00 each",
        paymentAmount: 20
    },
    {
        id: 2,
        name: "Joe Shmoe",
        isCurrentUser: false,
        groups: [],
        currentTown: "Los Angeles",
        paymentTypes: ["Venmo"],
        paymentSplit: "$300.00 / 3 = $100.00 each",
        paymentAmount: 100
    },
    {
        id: 3,
        name: "Betty Ford",
        isCurrentUser: false,
        groups: [],
        currentTown: "Los Angeles",
        paymentTypes: ["Zelle", "Venmo", "PayPal"],
        paymentSplit: "$60.00 / 3 = $20.00 each",
        paymentAmount: 20
    },
];

class Group {
    constructor(
        people = peopleList,
        title = "Unamed Group",
        groupName = "person",
        subtitle = "",
        turnIndex = 0
    ) {
        this.people = people;
        this.title = title;
        this.groupName = groupName;
        this.subtitle = subtitle;
        this.turnIndex = turnIndex;
    }
}

peopleList[RUBY].groups = [
    {
        people: peopleList,
        title: "Friends with",
        groupName: "person",
        subtitle: "",
    },
    {
        people: [peopleList[BF], peopleList[JOE]],
        title: "Followed By",
        groupName: "person",
        subtitle: "",
    },
    {
        people: [peopleList[BF], peopleList[JOE]],
        title: "Following",
        groupName: "person",
        subtitle: "",
    }
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
    // {
    //     people: [peopleList[RUBY], peopleList[JOE]],
    //     title: "Plans With",
    //     groupName: "Co-Planner",
    //     subtitle: "",
    // },
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

let messageListExample = {
    members: [peopleList[BF], peopleList[JOE], peopleList[RUBY]],
    messages: [
        {
            text: "Hey girl welcome!",
            person: peopleList[RUBY],
        }
        ,
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
        }
    ]
};

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
    // {
    //     people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
    //     title: "Planning with",
    //     groupName: "Co-Planner",
    // },
];

const EXPLORE_IMG = 0;
const EXPLORE_NAME = 1;
const EXPLORE_LOCATION = 2;
const EXPLORE_INDEX = 7;

const defaultCardActionList = ["schedule", "collect", "share", "discuss", "invite"];
const EXPLORE_DATA = [
    [
        "images/explore_bg.png",
        "Loquita",
        "Santa Barbara",
        // "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        "Authentic Spanish food",
        ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
        group_of_three,
        defaultCardActionList,
        0,
        "restaurants",
        3,
        100,
        [34.41421031876199, -119.69164738460584],
        "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
        [
            {
                timeStamp: 1656531438000,
                invitedBy: [peopleList[BF]],
                participants: [
                    {person: peopleList[RUBY], status: "Invited", paid: false},
                    {person: peopleList[JOE], status: "Going", paid: false},
                    {person: peopleList[BF], status: "Going", paid: true},
                ],
            }
        ]
    ],

    [
        "images/photos/brasil_arts_cafe.jpeg",
        "Brasil Arts Cafe",
        "Santa Barbara",
        // "",
        "Traditional Brazilian fare",
        ["Brazilian", "Cafe"],
        DEFAULT_GROUPS,
        defaultCardActionList,
        1,
        "restaurants",
        4,
        97,
        [34.42427273044929, -119.70538318430323],
        "The perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations.",
        [
            {
                timeStamp: 1656531438000,
                invitedBy: [peopleList[BF]],
                participants: [
                    {person: peopleList[RUBY], status: "Invited", paid: false},
                    {person: peopleList[JOE], status: "Going", paid: false},
                    {person: peopleList[BF], status: "Going", paid: true},
                ],
            }
        ]
    ],
    [
        "images/photos/yoichis.jpg",
        "Yoichi's",
        "Santa Barbara",
        // "",
        "Sushi in an intimate setting",
        ["Japanese", "Sushi", "Prix fixe"],
        DEFAULT_GROUPS,
        defaultCardActionList,
        2,
        "restaurants",
        4,
        95,
        [34.42715715496026, -119.70249364197355],
        "A prix fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
        []
    ],
    [
        "images/photos/los_agaves.jpg",
        "Los Agaves",
        "Santa Barbara",
        // "",
        "Flavors of Mexico",
        ["Mexican", "Family", "Catering", "Restaurant"],
        DEFAULT_GROUPS,
        defaultCardActionList,
        3,
        "restaurants",
        4,
        90,
        [34.4375036989364, -119.72734258675358],
        "The bold flavors of Mexico, an authentic dining experience, high-quality ingredients.",
        []
    ],
    [
        "images/photos/santo_mezcal.jpg",
        "Santo Mezcal",
        "Santa Barbara",
        "Modern Mexican cuisine",
        ["Mexican", "Happy Hour", "Catering", "Restaurant"],
        DEFAULT_GROUPS,
        defaultCardActionList,
        4,
        "restaurants",
        4,
        90,
        [34.4134427932841, -119.69127914319921],
        "Modern Mexican cuisine",
        []
    ],
    [
        "images/photos/la_super-rica_taqueria.jpg",
        "La Super-Rica Taqueria",
        "Santa Barbara",
        // "Celebrated Mexican spot for fish tacos, tamales & more served up in modest digs with patio seating.",
        "Celebrated Mexican spot",
        ["Mexican", "Dine-in", "Takeout", "Restaurant"],
        DEFAULT_GROUPS,
        defaultCardActionList,
        5,
        "restaurants",
        4,
        90,
        [34.42790056991083, -119.68722191681411],
        "Celebrated Mexican spot for fish tacos, tamales & more served up in modest digs with patio seating.",
        []
    ],
    [
        "images/photos/constantia.jpg",
        "Bridlewood Estate",
        "Santa Barbara",
        "Guided experience led by Hans Thorvald.",
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
            // {
            //     people: [peopleList[RUBY], peopleList[JOE], peopleList[BF]],
            //     title: "Planning with",
            //     groupName: "Co-Planner",
            // },
        ],
        defaultCardActionList,
        6,
        "things-to-do",
        4,
        85,
        [0, 0],
        "The Constantia Valley has an appeal that offers something of interest to everyone, from award winning restaurants offering, luxurious boutique hotel accommodation with spa’s as well as quant B&B’s. There are beautiful greenbelts to walk on, shops to explore, a brilliant zip lining adventure, mountain biking, horse riding, unique shops and a wine farms.",
        [
            {
                timeStamp: 1656531438000,
                invitedBy: [peopleList[BF]],
                participants: [
                    {person: peopleList[RUBY], status: "Invited", paid: false},
                    {person: peopleList[JOE], status: "Going", paid: false},
                    {person: peopleList[BF], status: "Going", paid: true},
                ],
            }
        ]
    ],
    [
        "images/photos/hanna-levin.png",
        "Hanna Levin &#128994;",
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
        defaultCardActionList,
        7,
        "people",
        -1,
        97,
        [0, 0],
        "A trusted Local Guide.",
        []
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
        defaultCardActionList,
        8,
        "places-to-see",
        -1,
        85,
        [45.884161669751066, -123.96863053734513],
        "This is the Oregon coast's most iconic photo opportunity.",
        []
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
        defaultCardActionList,
        9,
        "restaurants",
        4,
        85,
        [46.196750395147454, -123.79762603067174],
        "A popular local brewery with amazing views.",
        []
    ],
    [
        "images/photos/camel_valley_wines.jpg",
        "Stolpman Vineyard",
        "Santa Barbara",
        "Wine tasting and horse back riding tour",
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
        defaultCardActionList,
        10,
        "things-to-do",
        4,
        85,
        [34.64230332164125, -120.43610020209037],
        "A pleasant wine tasting and horse back riding tour.",
        []
    ],
    [
        "images/photos/gargiulo_vineyards.jpg",
        "Rusack Winery",
        "Napa Valley Solvang",
        "Make your own wine experience",
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
        defaultCardActionList,
        11,
        "things-to-do",
        4,
        85,
        [34.638058462065956, -120.14186578859605],
        "Here you can experience making your own wine.",
        []
    ],
    [
        "images/photos/sunstone_winery.jpg",
        "Sunstone Wine Tour with a Local",
        "Santa Ynez",
        "A true family-run winery",
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
        ["share", "collect"],
        12,
        "things-to-do",
        4,
        85,
        [34.58679315470256, -120.10337263941516],
        "Sunstone Wine Tour with a Local",
        []
    ],
    [
        "images/photos/foxen_vineyard.jpg",
        "Foxen Vineyard Wine Tasting Tour",
        "Santa Maria",
        "Minimalist winemaking",
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
        ["share", "collect"],
        13,
        "things-to-do",
        4,
        85,
        [34.82021411953863, -120.23023950022402],
        "Discover minimalist winemaking.",
        []
    ],
];

const ADItem = (id, icon, name, items = []) => {
    return {id: id, icon: icon, name: name, items: items};
}

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
    };
}

let activityMap = {};

activityData.map(a => a.id).forEach((c, i) => activityMap[c] = activityData[i]);

EXPLORE_DATA.map(list => cardData(...list)).forEach(item => {
    activityMap[item.kind].items.push(item)
});
const INTERESTS = [
    "Self-Guided Tours",
    "Sightseeing",
    "Guided Tours",
    "Historical Tours",
    "Virtual Tours",
    "Art Tours",
    "Food Tours",
    "Architectural Tours",
    "Exploring New Cultures",
    "Cruises",
    "Camping",
    "Digital Nomad",
    "Road Trips",
    "Shopping",
    "Fishing",
    "Pets",
    "Hunting/Shooting",
    "Watching Sports on TV/Web",
    "Watching Live Sports",
    "Pub Crawls/Drinking Tours",
    "Late Night Partying",
    "Clubs/Lounges/Bars",
    "Wine Tasting",
    "Cooking",
    "Foodie",
    "Playing an Instrument",
    "Photography",
    "Painting/Drawing",
    "Meeting Strangers",
    "Meetup Groups",
    "Live Music",
    "Broadway Shows",
    "Ballet Performances",
    "Art Galleries",
    "Theatre",
    "Movies/Series",
    "Extreme Sports",
    "Water Sports",
    "Swimming",
    "Skiing",
    "Tennis",
    "Biking",
    "Running",
    "Golf",
    "Hiking",
    "Boating/Sailing",
    "Snorkeling/Diving",
    "Climbing",
].sort();

const CUISINES = [
    "Indian",
    "Soul",
    "Cajun",
    "Greek",
    "Chinese",
    "Arab",
    "Japanese",
    "American",
    "Thai",
    "Mediterranean",
    "Moroccan",
    "French",
    "Spanish",
    "Korean",
    "German",
    "Vietnamese",
    "Turkish",
    "Mexican",
    "Italian",
    "Australian",
].sort();

const WHITE_WINE_BRANDS = [
    "Kim Crawford Wines",
    "Santa Margherita",
    "Bota Box Wines",
    "La Crema Wines",
    "Whitehaven",
    "Black Box Wines",
    "JaM Cellars",
    "Franzia",
    "Cloudy Bay",
    "Barefoot",
].sort();

const RED_WINE_BRANDS = [
    "Josh Cellars",
    "Meiomi Wines",
    "Bota Box Wines",
    "Decoy Wines",
    "La Crema Wines",
    "Bread & Butter",
    "Josh Cellars",
    "Bota Box Wines",
    "The Pinot Project",
    "Zaccagnini",
].sort();

const ROSE_WINE_BRANDS = [
    "Chateau d'Esclans",
    "Apothic",
    "Josh Cellars",
    "Chateau Ste. Michelle",
    "Franzia",
    "The Pinot Project",
    "Miraval",
    "BABE",
    "Rose All Day",
    "Luc Belaire",
].sort();

const BANDS = [
    "Ariana Grande",
    "Billie Eilish",
    "Dua Lipa",
    "Shawn Mendes",
    "Camila Cabello",
    "Harry Styles",
    "Taylor Swift",
    "Selena Gomez",
    "Rihanna",
    "Calvin Harris",
    "Griz",
    "Gramatik",
    "Big Gigantic",
    "Thievery Corporation",
    "The Floozies",
    "Benny Benassi",
    "Shiba San",
    "Daft Punk",
    "Hardwell",
    "The Chemical Brothers",
    "Bruce Springsteen",
    "Rolling Stones",
    "U2",
    "Aerosmith",
    "Pink Floyd",
    "Eagles",
    "Journey",
    "Fleetwood Mac",
    "Bon Jovi",
    "Bob Dylan",
].sort();

const CONTACTS = [
    `Patty O’Furniture`,
    `Paddy O’Furniture`,
    `Olive Yew`,
    `Aida Bugg`,
    `Maureen Biologist`,
    `Teri Dactyl`,
    `Peg Legge`,
    `Allie Grater`,
    `Liz Erd`,
    `A. Mused`,
    `Constance Noring`,
    `Lois Di Nominator`,
    `Minnie Van Ryder`,
    `Lynn O’Leeum`,
    `P. Ann O’Recital`,
    `Ray O’Sun`,
    `Lee A. Sun`,
    `Ray Sin`,
    `Isabelle Ringing`,
    `Eileen Sideways`,
    `Rita Book`,
    `Paige Turner`,
    `Rhoda Report`,
    `Augusta Wind`,
    `Chris Anthemum`,
    `Anne Teak`,
    `U.R. Nice`,
    `Anita Bath`,
    `Harriet Upp`,
    `I.M. Tired`,
    `I. Missy Ewe`,
    `Ivana B. Withew`,
    `Anita Letterback`,
    `Hope Furaletter`,
    `B. Homesoon`,
    `Bea Mine`,
    `Bess Twishes`,
    `C. Yasoon`,
    `Audie Yose`,
    `Dee End`,
    `Amanda Hug`,
    `Ben Dover`,
    `Eileen Dover`,
    `Willie Makit`,
    `Willie Findit`,
    `Skye Blue`,
    `Staum Clowd`,
    `Addie Minstra`,
    `Anne Ortha`,
    `Dave Allippa`,
    `Dee Zynah`,
    `Hugh Mannerizorsa`,
    `Loco Lyzayta`,
    `Manny Jah`,
    `Mark Ateer`,
    `Reeve Ewer`,
    `Tex Ryta`,
    `Theresa Green`,
    `Barry Kade`,
    `Stan Dupp`,
    `Neil Down`,
    `Con Trariweis`,
    `Don Messwidme`,
    `Al Annon`,
    `Anna Domino`,
    `Clyde Stale`,
    `Anna Logwatch`,
    `Anna Littlical`,
    `Norma Leigh Absen'`,
    `Sly Meebuggah`,
    `Saul Goodmate`,
    `Faye Clether`,
    `Sarah Moanees`,
    `Ty Ayelloribbin`,
    `Hugo First`,
    `Percy Vere`,
    `Jack Aranda`,
    `Olive Tree`,
    `Fran G. Pani`,
    `John Quil`,
    `Ev R. Lasting`,
    `Anne Thurium`,
    `Cherry Blossom`,
    `Glad I. Oli`,
    `Ginger Plant`,
    `Del Phineum`,
    `Rose Bush`,
    `Perry Scope`,
    `Frank N. Stein`,
    `Roy L. Commishun`,
    `Pat Thettick`,
    `Percy Kewshun`,
    `Rod Knee`,
    `Hank R. Cheef`,
    `Bridget Theriveaq'ua`,
    `Pat N. Toffis`,
    `Karen Onnabit`,
    `Col Fays`,
    `Fay Daway`,
    `Joe V. Awl`,
    `Wes Yabinlatelee`,
    `Colin Sik`,
    `Greg Arias`,
    `Toi Story`,
    `Gene Eva Convensh'u`,
    `Jen Tile`,
    `Simon Sais`,
    `Peter Owt`,
    `Hugh N. Cry`,
    `Lee Nonmi`,
    `Lynne Gwafranca`,
    `Art Decco`,
    `Lynne Gwistic`,
    `Polly Ester Undaw'ai`,
    `Oscar Nommanee`,
    `Laura Biding`,
    `Laura Norda`,
    `Des Ignayshun`,
    `Mike Rowe-Soft`,
    `Anne T. Kwayted`,
    `Wayde N. Thabalan'`,
    `Dee Mandingboss`,
    `Sly Meedentalflos'`,
    `Stanley Knife`,
    `Wynn Dozeaplikays'hu`,
    `Mal Ajusted`,
    `Penny Black`,
    `Mal Nurrisht`,
    `Polly Pipe`,
    `Polly Wannakrakou'e`,
    `Con Staninterupsh'un`,
    `Fran Tick`,
    `Santi Argo`,
    `Carmen Goh`,
    `Carmen Sayid`,
    `Norma Stitts`,
    `Ester La Vista`,
    `Manuel Labor`,
    `Ivan Itchinos`,
    `Ivan Notheridiya`,
    `Mustafa Leek`,
    `Emma Grate`,
    `Annie Versaree`,
    `Tim Midsaylesman`,
    `Mary Krismass`,
    `Tim “Buck” Too`,
    `Lana Lynne Creem`,
    `Wiley Waites`,
    `Ty R. Leeva`,
    `Ed U. Cayshun`,
    `Anne T. Dote`,
    `Claude Strophobia`,
    `Anne Gloindian`,
    `Dulcie Veeta`,
    `Abby Normal`,
].sort();

const categoryOptionData = [
    {name: "Things to Do", value: "0"},
    {name: "Places to See", value: "1"},
    {name: "Restaurants", value: "2"},
    {name: "Lodging", value: "3"},
    {name: "Transportation", value: "4"},
    {name: "People", value: "5"},
];

class ExpenseRecord {
    constructor(name = "", amount = 0, turnIndex = 0, amounts = [], mainPayer = {}) {
        this.name = name;
        this.amount = amount;
        this.turnIndex = turnIndex;
        this.mainPayer = mainPayer;
        this.amounts = amounts;
    }
}

class SettleDay {
    constructor(
        dateText = "Sunday 11/11/2022",
        amount = 0,
        message = "",
        amountPrefix = "",
        amountSuffix = "",
        expenseList = [],
        startingAmount = 0,
        group = new Group()
    ) {
        this.dateText = dateText;
        this.amount = amount;
        this.message = message;
        this.amountPrefix = amountPrefix;
        this.amountSuffix = amountSuffix;
        this.expenseList = expenseList;
        this.startingAmount = startingAmount;
        this.titleText = "";
        this.group = group;
        this.updateTitle();
        this.breakdown = [];
    }

    updateTitle() {
        const q = this.expenseList.length;
        this.titleText = `${q} Expense${q === 1 ? "" : "s"} - ${this.dateText}`;
    }
    updateBreakdown(){
        this.breakdown = [];
        this.expenseList.forEach(
            x => x.amounts.forEach(
                (a,i) => {
                    //create target object if it is the first amount row
                    if( this.breakdown.length <= i){
                        this.breakdown.push({total:0});
                    }
                    this.breakdown[i].person = a.person;
                    this.breakdown[i].total += a.amount;
                }
            )
        )
    }
    addExpense(x) {
        x.turnIndex = this.group.turnIndex;
        this.group.turnIndex = (this.group.turnIndex + 1) % this.group.people.length;

        const divideBy = this.group.people.length;
        const part = x.amount / divideBy;
        const remaining = Math.ceil(part * 100) / 100;
        const turnIndex = x.turnIndex;
        x.amounts = this.group.people.map(
            (p, i) => {
                if (i === turnIndex) {
                    x.mainPayer = p;
                }
                return {
                    name: p.isCurrentUser ? "You" : initials(p.name),
                    amount: i === turnIndex ? remaining : part,
                    turn: i === turnIndex,
                    person: p
                }
            }
        );

        this.expenseList.push(x);
        this.updateBreakdown();
        this.updateTitle();
    }

    getOwedToMe() {
        let total = 0;
        this.expenseList.filter(
            x => x.mainPayer.isCurrentUser
        ).forEach(
            x => x.amounts.filter(
                a => a.person !== x.mainPayer
            ).forEach(
                a => total += round(a.amount)
            )
        );
        return total;
    }

    getTotalIOwe() {
        let total = 0;
        this.expenseList.filter(
            x => !x.mainPayer.isCurrentUser
        ).forEach(
            x => x.amounts.filter(
                a => a.person === x.mainPayer
            ).forEach(
                a => total += round(a.amount)
            )
        );
        return total;
    }
}

class GroupDayList {

    constructor(list = []) {
        this.list = list;
        this.currentIndex = -1;
    }

    addExpense(date, x) {
        //TODO: do we have a day or need to add a new one?
        const day = new SettleDay();
        day.addExpense(x)
        this.list.push(day);
    }

    getOwedToMe() {
        let total = 0;
        this.list.forEach(day => total += day.getOwedToMe());
        return total;
    }

    getTotalIOwe() {
        let total = 0;
        this.list.forEach(day => total += day.getTotalIOwe());
        return total;
    }
}

let SETTLE_GROUP = new Group();

let SETTLE_GROUP_DATA = new GroupDayList([
    new SettleDay(
        "Sunday 11/11/2022",
        0,
        "",
        "",
        "",
        [],
        0,
        SETTLE_GROUP
    ),
    new SettleDay(
        "Monday 12/06/2022",
        125,
        "",
        "",
        "",
        [],
        0,
        SETTLE_GROUP
    ),
    new SettleDay(
        "Sunday 12/12/2022",
        300,
        "",
        "",
        "",
        [],
        0,
        SETTLE_GROUP
    ),
]);

SETTLE_GROUP_DATA.list[0].addExpense(new ExpenseRecord("Breakfast", 11.11));
SETTLE_GROUP_DATA.list[0].addExpense(new ExpenseRecord("Lunch", 22.22));
SETTLE_GROUP_DATA.list[0].addExpense(new ExpenseRecord("Dinner", 33.33));

// console.log(SETTLE_GROUP_DATA);

const EVENTS_DATA = [
    new VitaEvent(Period(), "", "", "", "demo event", new Date(), cardData(...EXPLORE_DATA[0]))
];

const injectVitaEventProps = (periods) =>
    periods.map((p) => {
        return {...p, ...VitaEvent(p), events:[]};
    });

const getPeriods = () =>
    injectVitaEventProps([
        {
            name: "pre-breakfast",
            from: new Date('1970-01-01T05:00:00'),
            to: new Date('1970-01-01T07:30:00'),
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
            from: new Date('1970-01-01T07:45:00'),
            to: new Date('1970-01-01T09:30:00'),
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
            from: new Date('1970-01-01T09:45:00'),
            to: new Date('1970-01-01T11:00:00'),
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
            from: new Date('1970-01-01T11:15:00'),
            to: new Date('1970-01-01T14:30:00'),
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
            from: new Date('1970-01-01T14:45:00'),
            to: new Date('1970-01-01T16:45:00'),
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
            from: new Date('1970-01-01T17:00:00'),
            to: new Date('1970-01-01T21:00:00'),
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
            from: new Date('1970-01-01T21:15:00'),
            to: new Date('1970-01-01T23:45:00'),
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
            from: new Date('1970-01-01T00:00:00'),
            to: new Date('1970-01-01T03:00:00'),
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