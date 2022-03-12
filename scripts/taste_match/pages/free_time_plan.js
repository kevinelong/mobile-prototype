TASTE_MATCH_PAGES.add("free_time_plan", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Share how you plan your free time,
        </div>
        <div class="question-control">
             so we can match you with amazing experiences.
        </div>
        <div class="question-control">
            How many meals do you eat out per month on average?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="free-time-plan-1" name="free-time-plan">
        <label for="free-time-plan-1">1 to 3</label>
        <input type="radio" id="free-time-plan-2" name="free-time-plan">
        <label for="free-time-plan-2">4 to 8</label>
        <input type="radio" id="free-time-plan-3" name="free-time-plan">
        <label for="free-time-plan-3">9 to 16</label>
        <input type="radio" id="free-time-plan-4" name="free-time-plan">
        <label for="free-time-plan-4">17 - 24</label>
        <input type="radio" id="free-time-plan-5" name="free-time-plan">
        <label for="free-time-plan-5">25 or more</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "free_time"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "free_time_plan2"),
        ]
    )
);
