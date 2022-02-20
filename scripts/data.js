const Period = () => {
    return {name: "", from: "", to: "", color: "", ideas: []}
};

let currentLocation = "Santa Barbara";

function VitaEvent(period = Period(), kind = "dining", currentMood="hungry") {
    return {
        what: period.name,
        when: period.from,
        where: currentLocation,
        duration: period.to,
        imagePath: "",
        titleText: period.name,
        subtitleText: period.ideas.length + " Smart Ideas!",
        content: period.name + row( "Current Mood: " + currentMood.toUpperCase() +
            actionItem("edit", "mood", "", "Update Mood")) +
            "or Check-In right here!" +
            row(actionItem("check-in", "", "", "Experience 1") +
                actionItem("check-in", "", "", "Experience 2") +
                actionItem("check-in", "", "", "Experience 3"))
        ,
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
const injectVitaEventProps = periods => periods.map(p => {return{...p, ...VitaEvent(p), events:[]}});

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


function Day(when='', events=[]) {

    if(!Array.isArray(events)){
        console.log('events' , events);
        debugger;
        return;
    }

    let periods = getPeriods();

    periods.forEach((p)=>{
       events.forEach((e)=>{
           if(e.when > p.from && e.when < p.to){
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
    {name:"Romantic"},
    {name:"Active"},
    {name:"Relaxed"},
    {name:"Thirsty"},
    {name:"Hungry"},
    {name:"Bored"},
];

const DESTINATIONS = [{
    name: "Santa Barbara, California USA"
},
    {
        name: "Las Vagas, Nevada USA"
    }
]
const RESTAURANTS = [{
    name: "1"
},
    {
        name: "2"
    }
];
const RESTAURANT_FILTERS = [
    "All",
    "F1",
    "F2",
    "F3"
];
const LODGING = [{
    name: "1"
},
    {
        name: "2"
    }
];
const LODGING_FILTERS = [
    "All",
    "F1",
    "F2",
    "F3"
];


/*
function smart(ve = VitaEvent()) {

    const content = div(
        "mood",
        "Current Mood: " +
        ve.currentMood.toUpperCase() +
        actionItem("edit", "mood", "", "Update Mood") +
        "or Check-In right here!" +
        actionItem("check-in", "", "", "Experience 1") +
        actionItem("check-in", "", "", "Experience 2") +
        actionItem("check-in", "", "", "Experience 3")
    );

    ve.subtitleText = ve.timeRange ? ve.timeRange : ve.period.from + '-' + ve.period.to;
    ve.titleText = smartTitle(ve);

    return smartCard(ve);
}

 */
/*
cardListSection(
    "Friday 12/12/2022",
    actionItem("add-place", "timeline", -1, "add", "black"),
    "Santa Barbara",
    [
        timelineCard(VitaEvent(DAILY_PERIODS[BREAKFAST], "dining")),
        smartCard(ve),
        smart(DAILY_PERIODS[AFTERNOON_EXPERIENCE], "2:45 pm - 4:30 pm", "active", []),
        smart(DAILY_PERIODS[EVENING_EXPERIENCE], "5:00 pm - 9:30 pm", "romantic", []),
    ]
),
cardListSection(
    "Saturday 12/13/2022",
    actionItem("add-place", "timeline", -1, "add", "black"),
    "Santa Barbara",
    DAILY_PERIODS.map(timelineCard)
),
cardListSection(
    "Sunday 12/14/2022",
    actionItem("add-place", "timeline", -1, "add", "black"),
    "Santa Barbara",
    DAILY_PERIODS.map(timelineCard)
),
 */
/*
Smart Recommendations are based on:
a) distance/time from a previous scheduled/current card and/or future scheduled card.
b) time of day(mood)
c) personal profile/interests/lifestyle/app actions
 */