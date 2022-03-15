TASTE_MATCH_PAGES.add("free_time_plan6", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Habits
        </div>
        <div class="question-control">
            How many vacations do you take each year that are 11 nights in length?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="free-time-plan6-1" name="free-time-plan6">
        <label for="free-time-plan6-1">0</label>
        <input type="radio" id="free-time-plan6-2" name="free-time-plan6">
        <label for="free-time-plan6-2">1-2</label>
        <input type="radio" id="free-time-plan6-3" name="free-time-plan6">
        <label for="free-time-plan6-3">3-4</label>
        <input type="radio" id="free-time-plan6-4" name="free-time-plan6">
        <label for="free-time-plan6-4">5-6</label>
        <input type="radio" id="free-time-plan6-5" name="free-time-plan6">
        <label for="free-time-plan6-5">7 or more</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "free_time_plan5"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "food"),
        ]
    )
);
