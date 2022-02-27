const Period = () => {
    return {name: "", from: "", to: "", color: "", ideas: []}
};

let currentLocation = "Santa Barbara";

function VitaEvent(period = Period(), kind = "dining", currentMood = "hungry", color = "#999999") {
    period.color = period.color ? period.color : color;
    return {
        what: period.name,
        when: period.from,
        where: currentLocation,
        duration: period.to,
        imagePath: "",
        titleText: period.name,
        subtitleText: (period && period.ideas) ? period.ideas.length + " Smart Ideas!" : "",
        content: "",
        tags: period.ideas,
        groups: [],
        actions: [],
        id: 0,
        kind: kind,
        booking_index: -1,
        period: period,
        places: [],
        currentMood: currentMood
    }
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
const injectVitaEventProps = periods => periods.map(p => {
    return {...p, ...VitaEvent(p), events: []}
});

const getPeriods = () => injectVitaEventProps([
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
]);

let current_period = LUNCH;


function Day(when = '', events = []) {

    if (!Array.isArray(events)) {
        console.log('events', events);
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
        events: [...events, ...getPeriods()]
    }
}


const DAYms = 24 * 60 * 60 * 1000;
const todayDate = new Date();
const yesterdayDate = new Date(todayDate.getTime() - DAYms);
const tomorrowDate = new Date(todayDate.getTime() + DAYms);


const THINGS_TO_DO = [{
    name: "Thing 1"
},
    {
        name: "Thing 2"
    }
];
const THINGS_TO_DO_FILTERS = [
    "All",
    "Indoor",
    "Outdoor",
    "Group"
];

const MOODS = [
    {name: "Romantic"},
    {name: "Active"},
    {name: "Relaxed"},
    {name: "Thirsty"},
    {name: "Hungry"},
    {name: "Bored"},
];

const DESTINATIONS = [{
    name: "Santa Barbara, California USA"
},
    {
        name: "Las Vegas, Nevada USA"
    }
]
const RESTAURANTS = [
    {
        name: "Loquita"
    },
    {
        name: "Los Agaves"
    },
    {
        name: "Santo Mezcal"
    },
    {
        name: "La Super-Rica Taqueria"
    }
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
        name: "Hilton"
    },
    {
        name: "Marriott"
    }
];
const LODGING_FILTERS = [
    "All",
    "Luxury",
    "Standard",
    "Bed &amp; Breakfast"
];

