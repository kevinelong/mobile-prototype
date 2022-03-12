TASTE_MATCH_PAGES.add("free_time_plan5", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Share how you plan your free time,
        </div>
        <div class="question-control">
             so we can match you with amazing experiences.
        </div>
        <div class="question-control">
            How many vacations do you take each year that are 4-10 nights in length?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="free-time-plan5-1" name="free-time-plan5">
        <label for="free-time-plan5-1">0</label>
        <input type="radio" id="free-time-plan5-2" name="free-time-plan5">
        <label for="free-time-plan5-2">1-2</label>
        <input type="radio" id="free-time-plan5-3" name="free-time-plan5">
        <label for="free-time-plan5-3">3-4</label>
        <input type="radio" id="free-time-plan5-4" name="free-time-plan5">
        <label for="free-time-plan5-4">5-6</label>
        <input type="radio" id="free-time-plan5-5" name="free-time-plan5">
        <label for="free-time-plan5-5">7 or more</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "free_time_plan4"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "free_time_plan6"),
        ]
    )
);
