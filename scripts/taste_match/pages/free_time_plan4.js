TASTE_MATCH_PAGES.add("free_time_plan4", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Share how you plan your free time so we can match you with amazing experiences
        </div>
        <div class="question-control">
            How many vacations do you take each year that are 2-3 nights in length?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="free-time-plan4-1" name="free-time-plan4">
        <label for="free-time-plan4-1">1-4</label>
        <input type="radio" id="free-time-plan4-2" name="free-time-plan4">
        <label for="free-time-plan4-2">5-12</label>
        <input type="radio" id="free-time-plan4-3" name="free-time-plan4">
        <label for="free-time-plan4-3">13-24</label>
        <input type="radio" id="free-time-plan4-4" name="free-time-plan4">
        <label for="free-time-plan4-4">25-36</label>
        <input type="radio" id="free-time-plan4-5" name="free-time-plan4">
        <label for="free-time-plan4-5">37-48</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "free_time_plan3"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "free_time_plan5"),
        ]
    )
);
