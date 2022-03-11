const interestsList = INTERESTS.map(s => checkboxControl(s)).join("\n");
//const list = INTERESTS.map(s => p(s)).join("\n");

TASTE_MATCH_PAGES.add("interests", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Interests
        </div>
        <div class="question-control">
            What are your interests?
        </div>
        <div class="question-control">
            Pick at least 4...
        </div>
    </div>
    <div class="checkbox-control">
        ${interestsList}
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

// function dropToggle() {
//     get(".dropdown-content").classList.toggle("show");
// }

// window.onclick = function (event) {
//     if (!event.target.matches(".dropbtn")) {
//         const dropdowns = get(".dropdown-content");

//         if (dropdowns.classList.contains("show")) {
//             dropdowns.classList.remove("show");
//         }
//     }
// }




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
