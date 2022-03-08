const interests = [
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
].sort()

function p(content="", className=""){
    return `<p ${className ? 'class="' + className +'"' : ""}>${content}</p>`;
}

const list = interests.map(s => p(s)).join("\n");

// const list = DATA.map(s => `<p>${s}</p>`).join("\n");

TASTE_MATCH_PAGES.add("interests", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Interests
        </div>
        <div class="question-control">
            What are your interests?
        </div>
    </div>
    <div class="dropdown-control">
        <button onclick="dropToggle()" class="dropbtn">Pick at least 4...</button>
        <div class="dropdown-content">
            ${list}
        </div>
    </div>
</div>
`,
        [
            PaneAction("BACK", "city"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "planning"),
        ]
    )
);

function dropToggle() {
    get(".dropdown-content").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        const dropdowns = get(".dropdown-content");

        if (dropdowns.classList.contains("show")) {
            dropdowns.classList.remove("show");
        }
    }
}




// function sortInterests() {
//     debugger;
//     const dropContent = get(".dropdown-content")
//     console.log(dropContent)
//     interests.sort()
//     interests.forEach(i => dropContent.appendChild(`<p>${i}</p>`))
//     console.log(interests)
// }

// document.onload(
//     sortInterests()
// )
