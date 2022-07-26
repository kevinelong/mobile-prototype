TASTE_MATCH_PAGES.add("free_time_plan3", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Habits
        </div>
        <div class="question-control">
            What experiences do you enjoy the most?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="free-time-plan3-1" name="free-time-plan3">
        <label for="free-time-plan3-1">Home town experiences</label>
        <input type="radio" id="free-time-plan3-2" name="free-time-plan3">
        <label for="free-time-plan3-2">Day trips</label>
        <input type="radio" id="free-time-plan3-3" name="free-time-plan3">
        <label for="free-time-plan3-3">Overnight road trips</label>
        <input type="radio" id="free-time-plan3-4" name="free-time-plan3">
        <label for="free-time-plan3-4">Flying regionally 1-3 hours</label>
        <input type="radio" id="free-time-plan3-5" name="free-time-plan3">
        <label for="free-time-plan3-5">Flying 4-6 hours</label>
        <input type="radio" id="free-time-plan3-6" name="free-time-plan3">
        <label for="free-time-plan3-6">Flying 7 hours or more</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "free_time_plan2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "free_time_plan4"),
        ]
    )
);
