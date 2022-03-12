TASTE_MATCH_PAGES.add("free_time_plan2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Share how you plan your free time,
        </div>
        <div class="question-control">
             so we can match you with amazing experiences.
        </div>
        <div class="question-control">
            On average, how many experiences do you engage in outside your home per month that DO NOT include meals or exercise?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="free-time-plan2-1" name="free-time-plan2">
        <label for="free-time-plan2-1">1 to 3</label>
        <input type="radio" id="free-time-plan2-2" name="free-time-plan2">
        <label for="free-time-plan2-2">4 to 8</label>
        <input type="radio" id="free-time-plan2-3" name="free-time-plan2">
        <label for="free-time-plan2-3">9 to 16</label>
        <input type="radio" id="free-time-plan2-4" name="free-time-plan2">
        <label for="free-time-plan2-4">17 - 24</label>
        <input type="radio" id="free-time-plan2-5" name="free-time-plan2">
        <label for="free-time-plan2-5">25 or more</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "free_time_plan"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "free_time_plan3"),
        ]
    )
);
